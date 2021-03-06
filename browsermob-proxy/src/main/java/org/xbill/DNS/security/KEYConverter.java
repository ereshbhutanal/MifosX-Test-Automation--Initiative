// Copyright (c) 1999-2004 Brian Wellington (bwelling@xbill.org)

package org.xbill.DNS.security;

import org.xbill.DNS.*;

import javax.crypto.interfaces.DHPublicKey;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.PublicKey;
import java.security.interfaces.DSAPublicKey;
import java.security.interfaces.RSAPublicKey;

// TODO: Auto-generated Javadoc
/**
 * Routines to convert between a DNS KEY record and a Java PublicKey.
 * 
 * @author Brian Wellington
 */

public class KEYConverter {

	/** The Constant DHPRIME768. */
	private static final BigInteger DHPRIME768 = new BigInteger(
			"FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A63A3620FFFFFFFFFFFFFFFF",
			16);

	/** The Constant DHPRIME1024. */
	private static final BigInteger DHPRIME1024 = new BigInteger(
			"FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE65381FFFFFFFFFFFFFFFF",
			16);

	/** The Constant TWO. */
	private static final BigInteger TWO = new BigInteger("2", 16);

	/**
	 * Big integer length.
	 * 
	 * @param i
	 *            the i
	 * @return the int
	 */
	static int BigIntegerLength(BigInteger i) {
		byte[] b = i.toByteArray();
		return (b[0] == 0 ? b.length - 1 : b.length);
	}

	/**
	 * Read big integer.
	 * 
	 * @param in
	 *            the in
	 * @param len
	 *            the len
	 * @return the big integer
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	static BigInteger readBigInteger(DataInputStream in, int len)
			throws IOException {
		byte[] b = new byte[len];
		int n = in.read(b);
		if (n < len)
			throw new IOException("end of input");
		return new BigInteger(1, b);
	}

	/**
	 * Write big integer.
	 * 
	 * @param out
	 *            the out
	 * @param val
	 *            the val
	 */
	static void writeBigInteger(ByteArrayOutputStream out, BigInteger val) {
		byte[] b = val.toByteArray();
		if (b[0] == 0)
			out.write(b, 1, b.length - 1);
		else
			out.write(b, 0, b.length);
	}

	/**
	 * Write short.
	 * 
	 * @param out
	 *            the out
	 * @param i
	 *            the i
	 */
	static void writeShort(ByteArrayOutputStream out, int i) {
		out.write((i >> 8) & 0xFF);
		out.write(i & 0xFF);
	}

	/**
	 * Parses the rsa.
	 * 
	 * @param in
	 *            the in
	 * @return the rSA public key
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	static RSAPublicKey parseRSA(DataInputStream in) throws IOException {
		int exponentLength = in.readUnsignedByte();
		if (exponentLength == 0)
			exponentLength = in.readUnsignedShort();
		BigInteger exponent = readBigInteger(in, exponentLength);

		int modulusLength = in.available();
		BigInteger modulus = readBigInteger(in, modulusLength);

		RSAPublicKey rsa = new RSAPubKey(modulus, exponent);
		return rsa;
	}

	/**
	 * Parses the dh.
	 * 
	 * @param in
	 *            the in
	 * @return the dH public key
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	static DHPublicKey parseDH(DataInputStream in) throws IOException {
		int special = 0;
		int pLength = in.readUnsignedShort();
		if (pLength < 16 && pLength != 1 && pLength != 2)
			return null;
		BigInteger p;
		if (pLength == 1 || pLength == 2) {
			if (pLength == 1)
				special = in.readUnsignedByte();
			else
				special = in.readUnsignedShort();
			if (special != 1 && special != 2)
				return null;
			if (special == 1)
				p = DHPRIME768;
			else
				p = DHPRIME1024;
		} else
			p = readBigInteger(in, pLength);

		int gLength = in.readUnsignedShort();
		BigInteger g;
		if (gLength == 0) {
			if (special != 0)
				g = TWO;
			else
				return null;
		} else
			g = readBigInteger(in, gLength);

		int yLength = in.readUnsignedShort();
		BigInteger y = readBigInteger(in, yLength);

		return new DHPubKey(p, g, y);
	}

	/**
	 * Parses the dsa.
	 * 
	 * @param in
	 *            the in
	 * @return the dSA public key
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	static DSAPublicKey parseDSA(DataInputStream in) throws IOException {
		byte t = in.readByte();

		BigInteger q = readBigInteger(in, 20);
		BigInteger p = readBigInteger(in, 64 + t * 8);
		BigInteger g = readBigInteger(in, 64 + t * 8);
		BigInteger y = readBigInteger(in, 64 + t * 8);

		DSAPublicKey dsa = new DSAPubKey(p, q, g, y);
		return dsa;
	}

	/**
	 * Converts a KEY/DNSKEY record into a PublicKey.
	 * 
	 * @param alg
	 *            the alg
	 * @param data
	 *            the data
	 * @return the public key
	 */
	static PublicKey parseRecord(int alg, byte[] data) {
		ByteArrayInputStream bytes = new ByteArrayInputStream(data);
		DataInputStream in = new DataInputStream(bytes);
		try {
			switch (alg) {
			case DNSSEC.RSAMD5:
			case DNSSEC.RSASHA1:
			case DNSSEC.RSA_NSEC3_SHA1:
				return parseRSA(in);
			case DNSSEC.DH:
				return parseDH(in);
			case DNSSEC.DSA:
			case DNSSEC.DSA_NSEC3_SHA1:
				return parseDSA(in);
			default:
				return null;
			}
		} catch (IOException e) {
			if (Options.check("verboseexceptions"))
				System.err.println(e);
			return null;
		}
	}

	/**
	 * Converts a DNSKEY record into a PublicKey.
	 * 
	 * @param r
	 *            the r
	 * @return the public key
	 */
	public static PublicKey parseRecord(DNSKEYRecord r) {
		int alg = r.getAlgorithm();
		byte[] data = r.getKey();
		return parseRecord(alg, data);
	}

	/**
	 * Converts a KEY record into a PublicKey.
	 * 
	 * @param r
	 *            the r
	 * @return the public key
	 */
	public static PublicKey parseRecord(KEYRecord r) {
		int alg = r.getAlgorithm();
		byte[] data = r.getKey();
		return parseRecord(alg, data);
	}

	/**
	 * Builds the rsa.
	 * 
	 * @param key
	 *            the key
	 * @return the byte[]
	 */
	static byte[] buildRSA(RSAPublicKey key) {
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		BigInteger exponent = key.getPublicExponent();
		BigInteger modulus = key.getModulus();
		int exponentLength = BigIntegerLength(exponent);

		if (exponentLength < 256)
			out.write(exponentLength);
		else {
			out.write(0);
			writeShort(out, exponentLength);
		}
		writeBigInteger(out, exponent);
		writeBigInteger(out, modulus);

		return out.toByteArray();
	}

	/**
	 * Builds the dh.
	 * 
	 * @param key
	 *            the key
	 * @return the byte[]
	 */
	static byte[] buildDH(DHPublicKey key) {
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		BigInteger p = key.getParams().getP();
		BigInteger g = key.getParams().getG();
		BigInteger y = key.getY();

		int pLength, gLength, yLength;
		if (g.equals(TWO) && (p.equals(DHPRIME768) || p.equals(DHPRIME1024))) {
			pLength = 1;
			gLength = 0;
		} else {
			pLength = BigIntegerLength(p);
			gLength = BigIntegerLength(g);
		}
		yLength = BigIntegerLength(y);

		writeShort(out, pLength);
		if (pLength == 1) {
			if (p.bitLength() == 768)
				out.write(1);
			else
				out.write(2);
		} else
			writeBigInteger(out, p);
		writeShort(out, gLength);
		if (gLength > 0)
			writeBigInteger(out, g);
		writeShort(out, yLength);
		writeBigInteger(out, y);

		return out.toByteArray();
	}

	/**
	 * Builds the dsa.
	 * 
	 * @param key
	 *            the key
	 * @return the byte[]
	 */
	static byte[] buildDSA(DSAPublicKey key) {
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		BigInteger q = key.getParams().getQ();
		BigInteger p = key.getParams().getP();
		BigInteger g = key.getParams().getG();
		BigInteger y = key.getY();
		int t = (p.toByteArray().length - 64) / 8;

		out.write(t);
		writeBigInteger(out, q);
		writeBigInteger(out, p);
		writeBigInteger(out, g);
		writeBigInteger(out, y);

		return out.toByteArray();
	}

	/**
	 * Builds a KEY record from a PublicKey.
	 * 
	 * @param name
	 *            the name
	 * @param dclass
	 *            the dclass
	 * @param ttl
	 *            the ttl
	 * @param flags
	 *            the flags
	 * @param proto
	 *            the proto
	 * @param key
	 *            the key
	 * @return the kEY record
	 */
	public static KEYRecord buildRecord(Name name, int dclass, long ttl,
			int flags, int proto, PublicKey key) {
		byte alg;

		if (key instanceof RSAPublicKey) {
			alg = DNSSEC.RSAMD5;
		} else if (key instanceof DHPublicKey) {
			alg = DNSSEC.DH;
		} else if (key instanceof DSAPublicKey) {
			alg = DNSSEC.DSA;
		} else
			return null;

		return (KEYRecord) buildRecord(name, Type.KEY, dclass, ttl, flags,
				proto, alg, key);
	}

	/**
	 * Builds a DNSKEY or KEY record from a PublicKey.
	 * 
	 * @param name
	 *            the name
	 * @param type
	 *            the type
	 * @param dclass
	 *            the dclass
	 * @param ttl
	 *            the ttl
	 * @param flags
	 *            the flags
	 * @param proto
	 *            the proto
	 * @param alg
	 *            the alg
	 * @param key
	 *            the key
	 * @return the record
	 */
	public static Record buildRecord(Name name, int type, int dclass, long ttl,
			int flags, int proto, int alg, PublicKey key) {
		byte[] data;

		if (type != Type.KEY && type != Type.DNSKEY)
			throw new IllegalArgumentException("type must be KEY "
					+ "or DNSKEY");

		if (key instanceof RSAPublicKey) {
			data = buildRSA((RSAPublicKey) key);
		} else if (key instanceof DHPublicKey) {
			data = buildDH((DHPublicKey) key);
		} else if (key instanceof DSAPublicKey) {
			data = buildDSA((DSAPublicKey) key);
		} else
			return null;

		if (data == null)
			return null;

		if (type == Type.DNSKEY)
			return new DNSKEYRecord(name, dclass, ttl, flags, proto, alg, data);
		else
			return new KEYRecord(name, dclass, ttl, flags, proto, alg, data);
	}

}

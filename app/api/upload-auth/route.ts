// @ts-nocheck
import { getUploadAuthParams } from '@imagekit/next/server';

export async function GET() {
    try {
        const {
            token, expire, signature
        } = getUploadAuthParams({
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        });

        return Response.json({
            token,
            expire,
            signature,
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        }, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        })
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: 'Failed to generate upload auth params' },
            { status: 500 }
        )
    }
}
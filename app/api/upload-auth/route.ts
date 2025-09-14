// @ts-nocheck
import { getUploadAuthParams } from '@imagekit/next/server';

export async function GET() {
    try {
        // Add timestamp to ensure uniqueness
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(2, 15);

        const {
            token, expire, signature
        } = getUploadAuthParams({
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        });

        return Response.json({
            token: `${token}_${timestamp}_${randomId}`, // Make token unique
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
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

const MAX_BYTES = 5 * 1024 * 1024; // 5 Mo
const ALLOWED = new Map<string, string>([
  ['image/jpeg', '.jpg'],
  ['image/png', '.png'],
  ['image/webp', '.webp'],
  ['image/gif', '.gif'],
]);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Aucun fichier reçu.' }, { status: 400 });
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: 'Fichier trop volumineux (max 5 Mo).' }, { status: 400 });
    }

    const mime = file.type;
    const ext = ALLOWED.get(mime);
    if (!ext) {
      return NextResponse.json(
        { error: 'Format non pris en charge (JPEG, PNG, WebP, GIF).' },
        { status: 400 }
      );
    }

    const buf = Buffer.from(await file.arrayBuffer());
    const dir = path.join(process.cwd(), 'public', 'blog', 'covers');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const name = `${Date.now()}-${randomUUID().slice(0, 8)}${ext}`;
    const filePath = path.join(dir, name);
    fs.writeFileSync(filePath, buf);

    const publicUrl = `/blog/covers/${name}`;
    return NextResponse.json({ ok: true, url: publicUrl });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Échec de l’upload.' }, { status: 500 });
  }
}

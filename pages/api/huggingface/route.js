import { NextResponse } from 'next/server';

export async function POST() {
	const response = await fetch(
		'https://api-inference.huggingface.co/models/facebook/fasttext-language-identification',
		{
			headers: {
				Authorization: 'Bearer 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',
			},
			method: 'POST',
			body: JSON.stringify({
				inputs: 'Caminando por la playa al atardecer, el suave susurro de las olas se mezclaba con la cálida brisa del mar, creando un momento de paz inolvidable.',
			}),
		}
	);
	const result = await response.json();

	return NextResponse.json({ message: result });
}

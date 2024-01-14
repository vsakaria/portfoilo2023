import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST() {
	const openai = new OpenAI({
		apiKey: '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',
		dangerouslyAllowBrowser: true,
	});

	const messages = [
		{
			role: 'system',
			content: `You are the most highly skilled SEO content writer in the world,
			you will respond in Highly crafted SEO content from now on. With a max word count of 166`,
		},
		{
			role: 'user',
			content: `What is the meaning of the universe?`,
		},
	];

	let response = null;

	try {
		response = await openai.chat.completions.create({
			model: 'gpt-4',
			messages,
			temperature: 0.1,
			max_tokens: 200,
		});

		return NextResponse.json({
			message: response,
		});
	} catch (error) {
		console.error(error);
		// Handle the error appropriately
	}

	return NextResponse.json({ message: response?.choices[0].message.content });
}
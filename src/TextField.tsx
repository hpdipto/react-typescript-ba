import React, { useState, inputRef } from "react";

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	fn?: (bob: string) => string;
	person: Person;
}

interface TextNode {
	text: string;
}

export const TextField: React.FC<Props> = () => {
	const [count, setCount] = useState<TextNode>({ text: "hello" });
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={divRef}>
			<input ref={inputRef} />
		</div>
	);
};

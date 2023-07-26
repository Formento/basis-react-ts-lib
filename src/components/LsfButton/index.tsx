import React, { InputHTMLAttributes } from "react";

export interface PropsButton extends InputHTMLAttributes<HTMLButtonElement>{
	label: string;
}

export const LsfButton = ({ label = 'Button' }: PropsButton) => {
	return <button>{label}</button>;
};

export default LsfButton;
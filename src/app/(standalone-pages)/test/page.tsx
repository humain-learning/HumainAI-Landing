'use client'
import PrimaryButton from "ui/PrimaryButton";
import { useState } from "react";
import { WebinarPageClientForm2 } from "@/components/hc-webinar/webinarPageClientForm2";


export default function TestPage() {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-col h-screen w-screen items-start justify-start">
			<h1>Test Page</h1>
			<PrimaryButton text="Open Form" target="" onClick={() => setOpen(true)} />
			{open && (
				<WebinarPageClientForm2 open={open} onClose={() => setOpen(false)} />
			)}
		</div>
	)
}
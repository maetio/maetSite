import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Challenge from "sections/challenge";

export default function PolicyPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<Layout>
					<SEO title="Maet.io" />
					<Challenge/>
				</Layout>
			</StickyProvider>
		</ThemeProvider>
	);
}
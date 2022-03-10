import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import PrivacyPolicy from "sections/privacyPolicy";

const data = {
	subTitle: 'Core features',
	title: 'Smart Jackpots that you may love this anytime & anywhere',
	description:
	  'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
	btnName: 'Get Started',
	btnURL: '#',
  };

export default function PolicyPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<Layout>
					<SEO title="Maet.io" />
					<PrivacyPolicy/>
					{/* <Container sx={styles.containerBox}>
						<Box sx={styles.contentBox}>
							<TextFeature
								subTitle={data.subTitle}
								title={data.title}
								description={data.description}
								btnName={data.btnName}
								btnURL={data.btnURL}
							/>
						</Box>
					</Container> */}
				</Layout>
			</StickyProvider>
		</ThemeProvider>
	);
}

const styles = {
	containerBox: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  flexWrap: ['wrap', null, null, 'nowrap'],
	  pb: [0, 7, 0, null, 7],
	},
	contentBox: {
	  flexShrink: 0,
	  px: [0, null, '30px', 0],
	  textAlign: ['center', null, null, 'left'],
	  width: ['100%', '80%', null, 340, 400, 430, null, 485],
	  pb: ['50px', '60px', null, 0],
	  mx: ['auto', null, null, 0],
	  '.description': {
		pr: [0, null, 6, 7, 6],
	  },
	},
};
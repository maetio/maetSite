/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, } from "theme-ui";
import TextFeature from 'components/text-feature';

const textData = {
	title: 'Our Privacy Policy',
	description:
	    `At Maet, your data protection and privacy are of the utmost importance to us. 
        With that in mind, our app only collects data that is essential to product development and usage rates.
        Additionally, we do not sell your information to third-party vendors.
        Other than the user account information, Maet only collects data that are integral to the features of its app, which includes the following:
        User Games, User Teams, User Wins and Losses.
        `,
};

const contactData = {
    description: `
        If you would like to receive a download of your Maet user data, or request to have your account data deleted,
        please contact team@maet.io with your name, username, and request and we will get back to you as soon as possible.
    `
};

export default function PrivacyPolicy() {
	return (
		<section sx={styles.banner} id="policy">
			<Container sx={styles.banner.container}>
				<Box sx={styles.banner.contentBox}>
                    <TextFeature
                        title={textData.title}
                        description={textData.description}
                    />
                    <TextFeature
                        description={contactData.description}
                    />
				</Box>
			</Container>
		</section>
	);
}

const styles = {
	banner: {
		pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
		pb: [2, null, 0, null, 2, 0, null, 5],
		position: "relative",
		zIndex: 2,
		container: {
			minHeight: "inherit",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
		contentBox: {
			width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
			mx: "auto",
			textAlign: "center",
			mb: ["40px", null, null, null, null, 7],
		},
	},
};

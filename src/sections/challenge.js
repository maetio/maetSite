/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, } from "theme-ui";
import TextFeature from 'components/text-feature';

const textData = {
	title: 'The Maet Challenge',
	description:
	    `The Maet challenge is defined as follows: 
		$200 will be given to the 4v4 Flag Football team that obtains the highest rating on the Maet platform by 12:00 a.m. on May 1st, 2020. 
		The reward will be given to the captain of the team for distribution. 
		If there is a tie between teams, the reward will be split equally among them. 
		Maet only tracks the results of these competitions and is not responsible for any injuries or actions related to the games that are created on the platform. 
        `,
};

const contactData = {
    description: `
	For any questions related the Maet Challenge or comments related to your user experience, please email betalaunch@maet.io. 
    `
};

export default function Challenge() {
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

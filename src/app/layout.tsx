import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Flex } from '@/once-ui/components'
import classNames from 'classnames';
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';
import { Footer, Header, RouteGuard } from "./components";
import { Background } from "@/once-ui/components/Background";

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

type FontConfig = {
    variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps) {
	return (
		<Flex
			as="html" lang="en"
			background="page"
			data-neutral="gray" data-brand="blue" data-accent="violet"
			data-solid="contrast" data-solid-style="flat"
			data-theme="dark"
			data-border="playful"
			data-surface="translucent"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable)}>
			<Flex style={{minHeight: '100vh'}}
				as="body"
				fillWidth margin="0" padding="0"
				direction="column">
				<Background/>
				<Flex
					fillWidth
					minHeight="16">
				</Flex>
				<Header/>
				<Flex
					zIndex={0}
					fillWidth paddingY="l" paddingX="l"
					justifyContent="center" flex={1}>
					<Flex
						justifyContent="center"
						fillWidth maxWidth={64} minHeight="0">
						<RouteGuard>
							{children}
						</RouteGuard>
					</Flex>
				</Flex>
				<Footer/>
			</Flex>
		</Flex>
	);
}
import { Page, Block, Navbar, NavRight, NavLeft, NavTitle, Link } from 'framework7-react';


function IndexPage() {

    
    return <>
        <Navbar>
            <NavLeft>
                <Link panelOpen="left">Left Link</Link>
            </NavLeft>
            <NavTitle>My App</NavTitle>
            <NavRight>
                <Link>Right Link</Link>
            </NavRight>
        </Navbar>
        <Page
            name="home"
        >
            <Block>
                <p>Here comes main view page text</p>
                <p>/test/dr/s/asr.html: <Link href="/test/dr/s/asr.html">click</Link></p>
                <p>/test/abc/p.html: <Link href="/test/abc/p.html">click</Link></p>
                <p>/test/about.html: <Link href="/test/about.html">click</Link></p>
            </Block>
        </Page>
    </>;
}

export default IndexPage;




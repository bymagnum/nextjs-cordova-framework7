import { Panel, Page, Block, Navbar } from 'framework7-react';

function PanelLeft() {
    return <> 
        <Panel left push>
            <Page>
                <Navbar title="Awesome App"></Navbar>
                <Block>
                    <p>Here comes main view page text</p>
                </Block>
            </Page>
        </Panel>
    </>;
}

export default PanelLeft;
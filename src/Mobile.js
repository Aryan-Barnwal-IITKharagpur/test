import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Popover,
} from 'antd'

import { Link } from "react-router-dom";

import {
    motion,
} from 'framer-motion'

import {
    useContext,
} from 'react'

import { Context } from './store/Context'

function SectionItem(props) {
    return (
        <Row justify='center' align='top' style={{'backgroundColor': props.backgroundColor, 'height': '400px', 'padding': '50px 20px'}}>
            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='center'>
                    <Typography.Title level={2}>
                        {props.sectionItem.title}
                    </Typography.Title>
                </Row>
                <Row justify='center'>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.sectionItem.text}
                    </Typography>
                </Row>
            </motion.div>

            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image preview={false} src={props.sectionItem.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
            </motion.div>
        </Row>
    )
}

// props: sectionList
function SectionList(props) {
    return (
        <>
        {
            props.sectionList.map((sectionItem, index) => {
                return (
                    <SectionItem sectionItem={sectionItem} backgroundColor={index % 2 === 0? 'white': null} />    
                )

            })
        }
        </>
    )
}

function Mobile(props){
    const {state, dispatch} = useContext(Context)

    return (
        <Layout style={{'overflow-x': 'hidden'}}>

            <Affix offsetTop={0}>
                <Layout.Header style={{ background: '#7952b3', width: '100%' }}>
                    <Row >
                    <Col span={4}>
                        <Image width={30} height={30} preview={false} src={state.appLogo} />
                    </Col>
                    <Col span={12}>
                        <Typography.Title level={3} style={{ color: 'white', marginLeft: '10px', marginTop: '10px' }}>
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            GET INFO
                        </button>
                        </Typography.Title>
                    </Col>

                    <Col span={4}>
                                {console.log(props.name)}
                                {props.name ? 
                                <div className="btn btn-light btn-sm" type="button" style={{'marginLeft': '30px'}}>
                                    Welcome
                                </div>
                                : 
                                <div className="dropdown" style={{'marginLeft': '0px'}}>
                                    <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sign In
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <li><a className="dropdown-item" href="#" style={{'fontSize': '26px', 'font-style': 'italic'}}><Link to="/signup"><b>SIGNUP</b></Link></a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#" style={{'fontSize': '26px', 'font-style': 'italic'}}><Link to="/login"><b>LOGIN</b></Link></a></li>
                                    </ul>
                                </div>}
                            </Col>
                    </Row>
                </Layout.Header>
            </Affix>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Get in touch with us</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <b style={{'fontSize': '20px'}}>NAME</b>
                        <br/>
                        <input style={{'height': '30px', 'width': '300px', 'fontSize': '20px'}} type='text' placeholder='Please tell us Name' />
                        <br/>
                        <br/>
                        <b style={{'fontSize': '20px'}}>PHONE NUMBER</b>
                        <br/>
                        <input style={{'height': '30px', 'width': '300px', 'fontSize': '20px'}} type='text' placeholder='Please enter your Phone number'/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                    </div>
                </div>
            </div>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '800px', 'paddingTop': '50px'}}>
                    <Row justify='center'>
                        <Typography.Title level={2}>
                            {state.coverTitle}
                        </Typography.Title>
                    </Row>

                    <Row justify='center' style={{'padding': '0px 20px'}}>
                        <Typography style={{'fontSize': '16px'}}>
                            {state.coverText}
                        </Typography>
                    </Row>

                    <Row justify='space-around'>
                        {
                            state.appleStoreLink &&
                            <Col style={{'width': '45%'}}>
                                <Row justify='center'>
                                <a href={state.appleStoreLink} target='_blank' rel="noopener noreferrer">
                                    <Image height={50} preview={false} src={state.appleStoreBadge}></Image>
                                </a>
                                </Row>
                            </Col>
                        }
                        {
                            state.googlePlayLink &&
                            <Col style={{'width': '45%'}}>
                                <Row justify='center'>
                                <a href={state.googlePlayLink} target='_blank' rel="noopener noreferrer">
                                    <Image height={50} style={{'padding': '2px 0'}} preview={false} src={state.googlePlayBadge}></Image>
                                </a>
                                </Row>
                            </Col>
                        }

                    </Row>

                    <Row justify='center'>
                        <Image preview={false} src={state.coverImage} style={{'width': '100%'}}></Image>
                    </Row>
                </Row>

                {/* endorsement list */}
                <Row justify='center' align='top' style={{'height': '60px', 'padding': '10px'}}>                
                    <motion.div
                            initial={{x: -300, opacity: 0}} 
                            whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                            viewport={{once: true}}>
                        <Row justify='center'>
                            <Typography.Title level={2} style={{'font-style': 'italic'}}>
                                {state.endorsementTitle}
                            </Typography.Title>
                        </Row>
                    </motion.div>
                </Row>

                {/* section list */}
                <SectionList sectionList={state.sectionList} />

                <Row justify='center' align='middle' style={{'height': '60px',  'padding': '10px' }}>
                        <motion.div 
                                initial={{y: 300, opacity: 0}} 
                                whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                                viewport={{once: true}}>
                            <Row justify='center'>
                                <Typography.Title level={2} style={{'font-style': 'italic'}}>
                                    {state.endorsementTitle2}
                                </Typography.Title>
                            </Row>
                        </motion.div>
                </Row>

                {/* section list */}
                <SectionList sectionList={state.sectionList2} />

                {/* policies */}
                <Row justify='center' align='top' style={{'backgroundColor': 'white', 'height': '250px', 'padding': '40px 20px'}}>
                
                    <Row justify='space-around' align='top' style={{'width': '100%'}}>
                        <Col>
                            <Row justify='start' align='middle'>
                                <Typography>
                                    Who we are
                                </Typography>
                            </Row>
                            <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                            <a href={state.appURL + '/policy/cookies'} target='_blank' rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px'}}>
                                    Cookies Policy
                                </Typography.Title>
                            </a>
                            </Row>
                            <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                            <a href={state.appURL + '/policy/privacy'} target='_blank' rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px'}}>
                                    Privacy Policy
                                </Typography.Title>
                            </a>
                            </Row>
                            <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                            <a href={state.appURL + '/policy/terms'} target='_blank' rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px'}}>
                                    Terms of Service
                                </Typography.Title>
                            </a>
                            </Row>
                        </Col>


                        <Col >
                            <Row justify='start' align='middle'>
                                <Typography>
                                    Need help?
                                </Typography>
                            </Row>
                            <Row justify='start' align='middle' style={{'cursor': 'pointer', 'marginTop': '20px'}}>
                                <Popover placement='top' title='Contact Us' content={
                                    <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                                        <Row justify='start' align='middle'>
                                            <Col>
                                                <Image width={40} height={40} preview={false} src={state.discordImage}></Image>
                                            </Col>
                                            <Col style={{'marginLeft': '5px'}}>
                                                <Typography>Join our Discord</Typography>  
                                            </Col>
                                        </Row>

                                    </a>
                                } trigger='click'>
                                    <Typography.Title level={5} style={{'margin': '0px'}}>
                                        Contact Us
                                    </Typography.Title>
                                </Popover>
                            </Row>
                            
                        </Col>

                    </Row>

                </Row>
                

                <Row justify="center" align='middle' style={{'backgroundColor': 'white', 'padding': '0 0 40px 0'}}>
                    <Col>
                        <Typography.Text type="secondary" style={{'fontSize': 12}}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row>

            </Layout.Content>

            </Layout>
    )
}

export default Mobile

import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Tooltip,
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

// props: image
function FloatImageCol(props) {
    return (
        <Col span={12}>
            <Row justify='center'>
            <motion.div 
                    initial={{y: 300, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image height={400} preview={false} src={props.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
            </motion.div>
            </Row>
        </Col>
    )
}

// props title, text
function FloatTextCol(props) {
    return (
        <Col span={12}>
            <motion.div 
                    initial={{y: 300, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography.Title>
                        {props.title}
                    </Typography.Title>
                </Row>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography style={{'fontSize': '22px'}}>
                        {props.text}
                    </Typography>
                </Row>
            </motion.div>
        </Col>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheLeft(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '500px', 'padding': '50px 100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                <FloatImageCol image={props.sectionItem.image} />
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
            </Row>
        </Row>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheRight(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '500px', 'padding': '50px 100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
                <FloatImageCol image={props.sectionItem.image} />
            </Row>
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
                    index % 2 === 0?
                        <SectionItemImageOnTheLeft sectionItem={sectionItem} backgroundColor={'white'} />
                        :
                        <SectionItemImageOnTheRight sectionItem={sectionItem} backgroundColor={null} />
                )
            })
        }
        </>
    )
}

function Desktop(props) {

    const {state, dispatch} = useContext(Context)

    return (
        <Layout style={{'minWidth': '870px'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': ' #7952b3', 'height': '70px', 'padding': '0!important'}}>
                    <Row justify='center' align='top' style={{'backgroundColor': ' #7952b3', 'height': '100%', 'padding': '0!important'}}>
                        <Row justify='start' align='top' style={{'maxWidth': '2000px', 'width': '100%', 'height': '100%', 'backgroundColor': '#7952b3', 'padding': '0!important'}}>
                            <Col offset={1} style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                                <Row justify='center' align='bottom'>
                                    <Col>
                                        <Image height={30} preview={false} src={state.appLogo}></Image>
                                    </Col>
                                    <Col>
                                        <Typography.Title level={3} style={{'color': 'white', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Typography.Title level={3} style={{'color': 'white', 'marginLeft': '30px', 'marginTop': '10px'}}>
                                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                        Get more information
                                    </button>
                                </Typography.Title>
                            </Col>
                            <Col>
                                {console.log(props.name)}
                                {props.name ? 
                                <div className="btn btn-light btn-sm" type="button" style={{'marginLeft': '30px'}}>
                                    Welcome {props.name}
                                </div>
                                : 
                                <div className="dropdown" style={{'marginLeft': '30px'}}>
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
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '850px'}}>
                <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                    <Col style={{'width': '40%'}}>
                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography.Title>
                                {state.coverTitle}
                            </Typography.Title>
                        </Row>

                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography style={{'fontSize': '22px'}}>
                                {state.coverText}
                            </Typography>
                        </Row>

                        <Row justify='center' style={{'marginTop': '50px'}}>
                            {
                                state.appleStoreLink &&
                                <Col style={{'width': '200px'}}>
                                    <Row justify='center'>
                                    <a href={state.appleStoreLink} target='_blank' rel="noopener noreferrer">
                                        <Image height={100} preview={false} src={state.appleStoreBadge}></Image>
                                    </a>
                                    </Row>
                                </Col>
                            }
                            {
                                state.googlePlayLink &&
                                <Col style={{'width': '150px'}}>
                                    <Row justify='center'>
                                    <a href={state.googlePlayLink} target='_blank' rel="noopener noreferrer">
                                        <Image height={100} preview={false} src={state.googlePlayBadge}></Image>
                                    </a>
                                    </Row>
                                </Col>
                            }                           
                        </Row>
                    </Col>

                    <Col style={{'width': '60%'}}>
                        <Row justify='center'>
                        <Image width={800} height={700} preview={false} src={state.coverImage}></Image>
                        </Row>
                    </Col>a
                </Row>
                </Row>

                {/* endorsement list */}
                <Row justify='center' align='middle' style={{'height': '130px'}}>
                    <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                    
                        <motion.div 
                                initial={{y: 300, opacity: 0}} 
                                whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                                viewport={{once: true}}>
                            <Row justify='center'>
                                <Typography.Title style={{'fontSize': 50, 'font-style': 'italic'}}>
                                    {state.endorsementTitle}
                                </Typography.Title>
                            </Row>
                        </motion.div>
                        
                    </Row>
                </Row>

                {/* section list */}
                <SectionList sectionList={state.sectionList} />

                {/* endorsement list */}
                <Row justify='center' align='middle' style={{'height': '130px', }}>
                    <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                    
                        <motion.div 
                                initial={{y: 300, opacity: 0}} 
                                whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                                viewport={{once: true}}>
                            <Row justify='center'>
                                <Typography.Title style={{'fontSize': 50, 'font-style': 'italic'}}>
                                    {state.endorsementTitle2}
                                </Typography.Title>
                            </Row>
                        </motion.div>
                        
                    </Row>
                </Row>

                {/* section list */}
                <SectionList sectionList={state.sectionList2} />


                {/* policies */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '225px', 'padding': '50px 100px'}}>
                <Row justify='left' align='top' style={{'maxWidth': '2000px', 'width': '100%'}}>
                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                            <Col>
                                <Image height={30} preview={false} src={state.appLogo} style={{'filter': "grayscale(1)", 'opacity': '0.7'}}></Image>
                            </Col>
                            <Col>
                                <Typography.Title level={3} style={{'color': 'gray', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                            </Col>
                        </Row>
                    </Col>

                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Who we are
                            </Typography>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/cookies'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Cookies Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/privacy'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title  level={5}>
                                Privacy Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/terms'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Terms of Service
                            </Typography.Title>
                        </a>
                        </Row>
                    </Col>

                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Need help?
                            </Typography>
                        </Row>
                        <Row justify='start' align='middle' style={{'cursor': 'pointer'}}>
                            <Popover placement='top' title='Contact Us' content={

                                <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                                    <Row justify='start' align='middle'>
                                        <Col>
                                            <Image height={40} preview={false} src={state.discordImage}></Image>
                                        </Col>
                                        <Col style={{'marginLeft': '5px'}}>
                                            <Typography>Join our Discord</Typography>  
                                        </Col>
                                    </Row>

                                </a>
                            } trigger='click'>
                                <Typography.Title level={5}>
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

export default Desktop

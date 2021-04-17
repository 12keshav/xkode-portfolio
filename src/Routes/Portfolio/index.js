import React, { Component } from 'react';
import { Row , Col} from 'react-bootstrap';
import '../Portfolio/style.scss';
import MyWork from '../Portfolio/Components/MyWork/index';
import MyWorkData from '../../Constant/MyWorkData'

class PortfolioWork extends Component {
   render(){
       return(
           <>
                 <section className="ToolWork">
                    <Row className="mt-5 mb-5">
                        <Col lg="8">
                            <h1>A software development agency that enables solutions through <br />
                                <span> Research, Design and Development</span>
                            </h1>
                        </Col>
                    </Row>

                    {
                        MyWorkData.map((val, ind) =>{
                            
                            return  <MyWork 
                                        key={ind}
                                        mainHead={val.mainHead}
                                        client={val.client}
                                        project={val.project}
                                        platform={val.platform}
                                        StrongHead={val.StrongHead}
                                        StrongHeadStyle={val.StrongHeadStyle}
                                        projectDescp={val.projectDescp}
                                        AndroidBadge={val.AndroidBadge}
                                        IosBadge={val.IosBadge}
                                        AndroidLink={val.AndroidLink}
                                        IosLink={val.IosLink}
                                        webclass={val.webclass}
                                        iosclass={val.iosclass}
                                        androidclass={val.androidclass}
                                        Websitelink={val.Websitelink}
                                        MainheadStyle={val.MainheadStyle}
                                        WebSitebadge={val.WebSitebadge}
                                        ToolworkClass={val.ToolworkClass}
                                        ProjectImage={val.ProjectImage}

                                     />
                        })
                    }
                  
                 </section>
           </>
       )
   }
}
export default PortfolioWork;
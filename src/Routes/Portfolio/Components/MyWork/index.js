import React from 'react'
import '../MyWork/style.scss'
import ImageIcon from '../../../../Components/Atoms/Imageicon';
import { Row , Col} from 'react-bootstrap';

const MyWork = (props) =>{
    return(
          <>
              <Row className={props.ToolworkClass}>
                         <Col lg="7">
                              <div className="ProjectInfo">
                                  <h2 style={props.MainheadStyle} >{props.mainHead}</h2>
                                  <Row>
                                     <Col lg="10" >
                                         <Row>
                                         <Col lg="4" sm="6">
                                         <ul>
                                             <li>
                                                  <h3> CLIENT </h3>
                                             </li>
                                             <li>
                                                  <p>  {props.client} </p>
                                             </li>
                                         </ul>
                                      </Col>
                                      <Col lg="4" sm="6">
                                      <ul>
                                             <li>
                                                  <h3>PROJECT</h3>
                                             </li>
                                             <li>
                                                  <p>{props.project} </p>
                                             </li>
                                         </ul>
                                      </Col>
                                      <Col lg="4"  sm="6">
                                      <ul>
                                             <li>
                                                  <h3> PLATFORM</h3>
                                             </li>
                                             <li>
                                                  <p>{props.platform} </p>
                                             </li>
                                         </ul>
                                      </Col>
                                         </Row>
                                     </Col>
                                    
                                  </Row>
                                  <Row>
                                      <ul className="ProjectDescrptn">
                                          <li>
                                              <p> <span style={props.StrongHeadStyle}>{props.StrongHead}</span>
                                                 {props.projectDescp}
                                              </p>
                                          </li>
                                      </ul>
                                  </Row>
                                  <Row>
                                        <ul className="ToolAppLink">
                                             <li>
                                                <a href={props.AndroidLink} target="_blank">
                                                 <ImageIcon 
                                                   src={props.AndroidBadge}
                                                   style={{width:"160px"}}
                                                   className={props.androidclass}
                                                 />
                                                 </a>
                                             </li>
                                             <li>
                                                 <a href={props.IosLink}  target="_blank">
                                                    <ImageIcon 
                                                        src={props.IosBadge}
                                                        className={props.iosclass}
                                                        style={{width:"160px"}}
                                                    />
                                                 </a>
                                             </li>
                                             <li>
                                                 <a href={props.Websitelink}  target="_blank">
                                                    <ImageIcon 
                                                        className={props.webclass}
                                                        src={props.WebSitebadge}
                                                        style={{width:"160px"}}
                                                    />
                                                 </a>
                                             </li>

                                        </ul>
                                  </Row>
                              </div>

                         </Col>

                         <Col lg="5" className="MainImageTool">
                              
                              <ImageIcon 
                                 src={props.ProjectImage}
                                 className="ProjectmainImage"
                                 style={{borderRadius:"5px"}}
                              />
                         </Col>
                    </Row>
        </>
    )
}
export default MyWork;
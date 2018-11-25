import React, { Component } from "react";
import "./dashboard.css";

//React Materiliaze
import {
  Row,
  Col,
  Icon,
  Collapsible,
  CollapsibleItem,
  Collection,
  CollectionItem,
  Tab,
  Tabs,
  Modal,
  Table
} from "react-materialize";

//Victory
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryPie
} from "victory";

//components
import WineryBookings from "./wineryBookings/wineryBookings";
import Marketing from "./marketing/marketing";

//images
import Cheers from "../../images/cheers.png";

//data
const dataQuarterly = [
  { quarter: 1, earnings: 12000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const dataMonthly = [
  { month: 1, earnings: 2000 },
  { month: 2, earnings: 6500 },
  { month: 3, earnings: 4250 },
  { month: 4, earnings: 3000 },
  { month: 5, earnings: 2500 },
  { month: 6, earnings: 1800 },
  { month: 7, earnings: 2200 },
  { month: 8, earnings: 2700 },
  { month: 9, earnings: 1900 },
  { month: 10, earnings: 3300 },
  { month: 11, earnings: 5400 },
  { month: 12, earnings: 8000 }
];

const dataPieChart = [
  { x: 1, y: 3.8, label: "Winery 38%" },
  { x: 2, y: 1.8, label: "Lodge 18%" },
  { x: 3, y: 4.4, label: "Hot Springs 44%" }
];

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Row>
          <Col s={12} m={3}>
            <div className="sideNav">
              <img src={Cheers} alt="wine" className="activityCardImg" />
              <h5>
                <Icon>trending_up</Icon>Winery
              </h5>
              {/* <hr /> */}
              <Collection>
                <CollectionItem href="#">
                  <Modal
                    header="Wine Inventory"
                    bottomSheet
                    trigger={
                      <CollectionItem href="#">Inventory Report</CollectionItem>
                    }
                  >
                    <Table>
                      <thead>
                        <tr>
                          <th data-field="id">Name</th>
                          <th data-field="name">Wine Type</th>
                          <th data-field="price">Item Price</th>
                          <th data-field="price">Quantity</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Natural Bounty</td>
                          <td>Shiraz</td>
                          <td>$18.99</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td>Shoreside Spiller</td>
                          <td>Rose</td>
                          <td>$19.99</td>
                          <td>62</td>
                        </tr>
                        <tr>
                          <td>Vine Lover's Delight</td>
                          <td>Merlot</td>
                          <td>$12.99</td>
                          <td>36</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Modal>
                </CollectionItem>
                <CollectionItem href="#" active>
                  Bookings
                </CollectionItem>
                <CollectionItem href="#">Harvest</CollectionItem>
              </Collection>
              <h5>
                <Icon>trending_up</Icon>Hot Springs
              </h5>
              <Collection>
                <CollectionItem href="#">Members</CollectionItem>
                <CollectionItem href="#">Bookings</CollectionItem>
              </Collection>
              <h5>
                <Icon>trending_up</Icon>Lodge
              </h5>
              <Collection>
                <CollectionItem href="#">Events</CollectionItem>
                <CollectionItem href="#">Bookings</CollectionItem>
              </Collection>
            </div>
          </Col>

          <Col s={12} m={9}>
            <Col s={12}>
              <div className="tabChartContainer">
                <div className="tabChartHeader">
                  <span>Cozy Stone Winery & Hot Springs</span>
                </div>
                <Tabs className="tabStyle">
                  <Tab active title="Bookings">
                    <Col s={12}>
                      <div className="activityCard">
                        <h5>
                          <Icon className="iconVert">insert_invitation</Icon>
                          Monthly Booking Projections
                        </h5>
                        <WineryBookings />
                      </div>
                    </Col>
                  </Tab>
                  <Tab title="Marketing">
                    <Col s={12} l={12}>
                      <div className="activityCardGreen">
                        <h5>
                          <Icon className="iconVert">insert_chart</Icon>
                          Marketing Analysis
                        </h5>
                        <Marketing />
                      </div>
                    </Col>
                  </Tab>
                  <Tab title="Reporting">
                    <Col s={12} l={6}>
                      <div className="activityCard">
                        <h5>
                          <Icon className="iconVert" small>
                            pie_chart
                          </Icon>
                          Booking Analysis
                        </h5>
                        <VictoryPie
                          colorScale={["tomato", "orange", "cyan"]}
                          labelRadius={80}
                          innerRadius={60}
                          padAngle={3}
                          data={dataPieChart}
                          animate={{
                            duration: 2000
                          }}
                        />
                      </div>
                    </Col>
                    <Col s={12} l={6}>
                      <div className="activityCardGreen">
                        <h5>
                          <Icon className="iconVert" small>
                            monetization_on
                          </Icon>
                          Revenue
                        </h5>
                        <Collapsible defaultActiveKey={1}>
                          <CollapsibleItem active header="Quarterly">
                            <VictoryChart
                              theme={VictoryTheme.material}
                              domainPadding={20}
                            >
                              <VictoryAxis
                                tickValues={[1, 2, 3, 4]}
                                tickFormat={[
                                  "Quarter 1",
                                  "Quarter 2",
                                  "Quarter 3",
                                  "Quarter 4"
                                ]}
                              />
                              <VictoryAxis
                                dependentAxis
                                tickFormat={x => `$${x / 1000}k`}
                              />
                              <VictoryBar
                                data={dataQuarterly}
                                x="quarter"
                                y="earnings"
                              />
                            </VictoryChart>
                          </CollapsibleItem>
                          <CollapsibleItem header="Monthly">
                            <VictoryChart
                              // adding the material theme provided with Victory
                              theme={VictoryTheme.material}
                              domainPadding={10}
                            >
                              <VictoryAxis
                                tickValues={[
                                  1,
                                  2,
                                  3,
                                  4,
                                  5,
                                  6,
                                  7,
                                  8,
                                  9,
                                  10,
                                  11,
                                  12
                                ]}
                                tickFormat={[
                                  "Jan",
                                  "Feb",
                                  "Mar",
                                  "Apr",
                                  "May",
                                  "Jun",
                                  "Jul",
                                  "Aug",
                                  "Sep",
                                  "Oct",
                                  "Nov",
                                  "Dec"
                                ]}
                              />
                              <VictoryAxis
                                dependentAxis
                                tickFormat={x => `$${x / 100}k`}
                              />
                              <VictoryBar
                                data={dataMonthly}
                                x="month"
                                y="earnings"
                              />
                            </VictoryChart>
                          </CollapsibleItem>
                          <CollapsibleItem header="Annual">
                            Lorem ipsum dolor sit amet.
                          </CollapsibleItem>
                        </Collapsible>
                      </div>
                    </Col>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

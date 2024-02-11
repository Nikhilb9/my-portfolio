import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
// import Preview1 from "../../assets/portfolio/project01/preview.png";
// import Preview2 from "../../assets/portfolio/project02/preview.png";
// import Preview3 from "../../assets/portfolio/project03/preview.png";
// import Preview4 from "../../assets/portfolio/project04/preview.png";
// import Preview5 from "../../assets/portfolio/project05/preview.png";
// import Preview6 from "../../assets/portfolio/project06/preview.png";
import Preview from "../../assets/projects/projects.jpg";

//Components
// import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview,
          title: "LeverageEdu",
          href:"https://leverageedu.com/"
        },
        {
          id: "2",
          preview: Preview,
          title: "Univalley",
          href: "https://univalley.com/#"
        },
        {
          id: "3",
          preview: Preview,
          title: "Tutree student",
          href: "https://student.tutree.com/"
        },
        {
          id: "4",
          preview: Preview,
          title: "Tutree Tutor",
          href: "https://tutor.tutree.com/"
        },
        {
          id: "5",
          preview: Preview,
          title: "indiaecat",
          href: "http://indiaecat.com:3000/"
        },
        {
          id: "6",
          preview: Preview,
          title: "CSP",
          href: "http://35.154.114.246/"
        },
        {
          id: "6",
          preview: Preview,
          title: "Uniconnect",
          href: "https://uniconnect.leverageedu.com/"
        },
        {
          id: "6",
          preview: Preview,
          title: "IPNext",
          href: "https://ipnext.leverageedu.com/"
        },
        {
          id: "7",
          preview: Preview,
          title: "Waste Management Ooredoo",
          href:'https://www.ooredoo.qa/web/en/business/ict-solutions/internet-of-things/waste-managament/'
        },
        {
          id: "8",
          preview: Preview,
          title: "Sewage Management Ooredoo",
          href:'https://www.ooredoo.qa/web/en/business/ict-solutions/internet-of-things/waste-managament/'
        },
        {
          id: "9",
          preview: Preview,
          title: "Asset Management Ooredoo",
          href:'https://www.ooredoo.qa/web/en/business/ict-solutions/internet-of-things/asset-management/'
        },
        {
          id: "10",
          preview: Preview,
          title: "Silk & Sonder",
          href:'https://www.silkandsonder.com/'
        },
        {
          id: "11",
          preview: Preview,
          title: "Blueverse",
          href:'https://blueverseindia.com/'
        },
        {
          id: "12",
          preview: Preview,
          title: "Bitetime",
          href:'https://bitetime.com/'
        }
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} link={project.href} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="WORK SHOWCASE." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("all")}>
                    ALL
                  </li>
                  {/* <li
                    className={this.state.pickedFilter === "branding" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("branding")}
                  >
                    BRANDING
                  </li>
                  <li
                    className={this.state.pickedFilter === "illustrations" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("illustrations")}
                  >
                    ILLUSTRATIONS
                  </li>
                  <li className={this.state.pickedFilter === "web" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("web")}>
                    WEB
                  </li> */}
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          {/* <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row> */}
        </div>
      </div>
    );
  }
}

export default Portfolio;

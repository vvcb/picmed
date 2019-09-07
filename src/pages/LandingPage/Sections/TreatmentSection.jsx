import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import treatmentStyle from "assets/jss/material-kit-react/views/landingPageSections/treatmentStyle.jsx";

// YAML data
import indexPageData from 'data/indexPageData.yml'
import treatmentData from 'data/treatmentData.yml'
class TreatmentSection extends React.Component
{
  render ()
  {
    const { classes } = this.props;
    return (
      <div className={ classes.section }>
        <GridContainer justify="center">
          <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
            <h2 className={ classes.title }>
              { treatmentData.title }
            </h2>
            <h5 className={ classes.description }>
              { treatmentData.content }
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
              <InfoArea
                title={treatmentData.blurb1.title}
                description={treatmentData.blurb1.content}
                icon={ Chat }
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
              <InfoArea
                title={treatmentData.blurb2.title}
                description={treatmentData.blurb2.content}
                icon={ VerifiedUser }
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
              <InfoArea
               title={treatmentData.blurb3.title}
               description={treatmentData.blurb3.content}
               icon={ VerifiedUser }
                icon={ Fingerprint }
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles( treatmentStyle )( TreatmentSection );

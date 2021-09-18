import React from "react";
import clsx from "clsx";
// Mui-components
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@/mui-custom/Link";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
// Icons
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    footer: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
    },
    footerTitle: {
      fontWeight: 700,
      fontSize: "1.313rem",
      lineHeight: "2rem",
      marginBottom: theme.spacing(7),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2, 0),
        textDecoration: "underline",
      },
    },
    footerContainer: {
      padding: theme.spacing(2),
      justifyContent: "space-between",
      alignItems: "flex-start",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "end",
      },
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(1, 5),
      },
    },
    linkSection: {
      [theme.breakpoints.only("xs")]: {
        textAlign: "center",
      },
    },
    listItem: {
      marginBottom: theme.spacing(2),
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    copyrights: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(2, 5),
      backgroundColor: theme.palette.common.black,
      color: theme.palette.grey[500],
      alignItems: "center",
    },
    sidePadded: {
      margin: theme.spacing(0, 2),
    },
    rightAligned: {
      [theme.breakpoints.up("md")]: {
        textAlign: "right",
      },
    },
    socialIcons: {
      display: "flex",
      marginTop: theme.spacing(4),
      [theme.breakpoints.only("xs")]: {
        justifyContent: "center",
      },
    },
    leftMargin: {
      marginLeft: theme.spacing(1),
    },
  })
);

interface FooterLinks {
  key: string;
  title: string;
  description: string[];
}

export default function Footer() {
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      disableGutters
      component="footer"
      className={classes.footer}
    >
      <Container maxWidth="lg">
        <Grid container className={classes.footerContainer}>
          {footers.map((footer) => (
            <Grid
              item
              className={classes.linkSection}
              key={footer.key}
              xs={12}
              sm={5}
              md={"auto"}
            >
              <Typography className={classes.footerTitle}>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item} className={classes.listItem}>
                    <Link href="#" color="inherit">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sm={5}
            md={"auto"}
            className={clsx(classes.linkSection, classes.rightAligned)}
          >
            <Typography className={classes.footerTitle}>{"Support"}</Typography>
            <ul>
              {["Help", "Contact Us"].map((item) => (
                <li key={item} className={classes.listItem}>
                  <Link href="#" color="inherit">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={classes.socialIcons}>
              {socials.map(({ icon, id }) => (
                <IconButton
                  size="small"
                  className={classes.leftMargin}
                  key={id}
                >
                  {icon}
                </IconButton>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.copyrights}>
          <Grid item>
            <Typography variant="caption" color="inherit">
              {"© " + new Date().getFullYear() + " - "}
              <Link color="inherit" href="#">
                COMETLABS IT SOLUTIONS PVT. LTD.
              </Link>{" "}
            </Typography>
          </Grid>
          <div style={{ flexGrow: 1 }} />
          <Grid item className={classes.sidePadded}>
            Terms of Service
          </Grid>
          <Grid item className={classes.sidePadded}>
            Privacy Policy
          </Grid>
          <Grid item className={classes.sidePadded}>
            Sitemap
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

const footers: FooterLinks[] = [
  {
    key: "365974c9-ff06-4dcd-b361-4597b5e1e798",
    title: "Company",
    description: ["About", "Blog", "Jobs", "Festec App", "Reviews and Stories"],
  },
  {
    key: "b6100026-394a-4211-ac99-b59b48bfb3ec",
    title: "Customers",
    description: [
      "Hire Developers",
      "Sponsor Events",
      "Organize a Fest",
      "Organic Profile Matching AI",
      "TechStack Judging Engine",
    ],
  },
  {
    key: "80ea2983-c2e7-41e1-b2c4-db33dad8f792",
    title: "Developers",
    description: [
      "Fests and Tech Events",
      "Organic Resume",
      "Apply for Jobs",
      "Learn with AI",
      "Clubs and Communities",
    ],
  },
];

const socials = [
  {
    id: "720fb033-3c54-42ba-83df-a31dea09541b",
    icon: <SiFacebook color="white" />,
  },
  {
    id: "80edbef9-8b7a-4c40-8d60-c67c09a7dd2a",
    icon: <SiInstagram color="white" />,
  },
  {
    id: "e78e367f-2ce5-4af8-ac8a-bfd76f51289e",
    icon: <SiLinkedin color="white" />,
  },
  {
    id: "e8d75091-05cf-4a4e-8bef-5feedc3115fe",
    icon: <SiTwitter color="white" />,
  },
];

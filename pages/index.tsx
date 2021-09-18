import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ThemeSwitch from "@/components/ThemeSwitch/switch";
import Footer from "@/components/Footer/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <ThemeSwitch />
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, minima
          facilis soluta adipisci quia explicabo ullam sapiente saepe asperiores
          molestiae, esse excepturi est labore expedita error recusandae dicta
          beatae quasi enim? Incidunt assumenda illo ipsa ipsum voluptatem
          necessitatibus quia sint. Autem tempora, expedita corrupti quas iusto
          officia iure voluptatem quam dolore culpa pariatur fugit doloremque,
          minima soluta eaque vitae magnam non animi praesentium eos quibusdam
          aliquam? Odit voluptatibus labore nobis magnam autem ullam nulla
          consectetur, culpa omnis itaque facilis quaerat earum voluptatum
          tempora deleniti magni quam fugiat natus. Cupiditate maiores officiis
          exercitationem quisquam rerum distinctio atque saepe quam,
          accusantium, voluptatem commodi reiciendis optio adipisci, quibusdam
          pariatur blanditiis voluptates repellendus explicabo animi.
          Asperiores, qui tenetur laboriosam modi repellendus ad sequi! Officia
          nemo harum incidunt tenetur culpa dolores libero quaerat, eius maiores
          deleniti officiis laboriosam vel earum. Eum ducimus quibusdam dolor,
          nesciunt ab voluptates sunt repellat impedit dignissimos explicabo
          corrupti provident beatae, delectus exercitationem vitae deleniti rem
          quos quidem! Eligendi voluptatibus minus blanditiis odio ut officiis
          voluptate iste assumenda nesciunt maxime et dolores itaque doloremque
          ipsa fuga tempora eos id sed, libero omnis. Dolor, quis tempora animi
          molestias minus perspiciatis provident nisi aperiam, natus maiores
          iure consequuntur nulla veritatis, possimus doloremque veniam harum
          est libero quae saepe. Nemo eius facere repellendus accusantium,
          ducimus optio recusandae repellat ex accusamus repudiandae! Similique
          rem impedit, deserunt natus dignissimos molestias dolore. Eum maiores
          temporibus culpa velit obcaecati fuga nihil quas nemo illo ducimus
          voluptate distinctio explicabo minima sed, ratione sunt, repellendus
          nam vero, commodi assumenda. Corrupti omnis earum quo fuga cumque sunt
          voluptatem libero neque sint? Incidunt architecto esse doloremque
          tempora eligendi laborum eos laboriosam assumenda sunt fugiat! Iste
          suscipit sapiente, sint distinctio nesciunt fuga nisi quisquam,
          voluptatum doloribus corporis dicta deserunt officiis atque nihil
          soluta perferendis ab error architecto. Doloribus a in fugit corporis
          labore molestiae rem et, magni qui reprehenderit laudantium? Dolorum
          accusamus laudantium dolore sunt, quis modi animi quam sapiente ut
          minima aspernatur corporis cumque quidem repudiandae, in debitis autem
          reiciendis eos commodi omnis impedit? Assumenda ex facere est facilis,
          quis atque nisi earum vel neque, modi sapiente. Optio sequi, adipisci
          ex earum nesciunt aspernatur porro distinctio praesentium qui
          quibusdam. Nemo consectetur doloremque adipisci odio repudiandae
          molestias modi sed enim obcaecati non aperiam illo eos, doloribus id
          quam officia reprehenderit deserunt voluptates ipsa quaerat laboriosam
          magnam autem magni ullam! Beatae amet ad rerum, impedit, dignissimos
          numquam eum corporis ea quae, architecto facilis aperiam.
        </Typography>
      </Container>
      <Footer />
    </>
  );
}

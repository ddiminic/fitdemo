import React, { useEffect } from "react";
import { SportCard } from "../../components/sport-card/sport-card";
import { Container } from "@mui/material";
import { useStyles } from "./sports.style";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { getSports } from "../../store/actions";
import { LOADING } from "../../store/actionTypes";

export const Sports = () => {
  const dispatch = useDispatch();
  const sportsState = useSelector((state: RootState) => state.fitdemoReducer.sports)
  useEffect(()=>  {
    dispatch({type: LOADING, payload: true});
    dispatch(getSports())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const classes = useStyles();

  interface Props {
    sports: {
      _id: string;
      name: string;
      description: string;
      image: string;
    }[];
  }

  const SportCards: React.FC<Props> = ({ sports }) => {
    const spCards = sports.map((element) => {
      return (
        <SportCard
          name={element.name}
          description={element.description}
          image={element.image}
          clicked={(el: any) => {
            alert(el);
          }}
        />
      );
    });
    return <div className={classes.container}>{spCards}</div>;
  };

  return (
    <Container>
      <SportCards sports={sportsState} />
    </Container>
  );
};

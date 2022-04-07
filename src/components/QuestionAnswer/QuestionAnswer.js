import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./QuestionAnswer.css";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardContentStyled = styled(CardContent)({
    textAlign: 'left',
});

const CardActionsStyled = styled(CardActions)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: '20px'
});


function QuestionAnswer({index, question, answer}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        //The first answer is displayed by default
        if(index === 0) {
            setExpanded(true);
        }
    }, [index, question]);

    return (
        <Card className="questionAnswer" onClick={handleExpandClick}>
            <CardActionsStyled>
                <CardContentStyled >
                    <Typography className="question">
                        {question}
                    </Typography>
                </CardContentStyled>
                {/*Button to display the answer*/}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActionsStyled>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{padding: "0 15px", textAlign:"left"}}>
                    <Typography paragraph className="answer">{answer}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default QuestionAnswer;
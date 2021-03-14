import ShoeData from '../config/ShoeData.json'
import CardScreen from '../components/Card'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
})

const Home = () => {
  const classes = useStyles();
    return(
        <div className={classes.root}>
        {Object.keys(ShoeData).map((val,ind)=>{
            const name = ShoeData[val].name;
            const img = ShoeData[val].img;
            return(<div key={ind}>
                <Link to={`/product/${val}`} >
                    <CardScreen name={name} imgSrc={img} />
                </Link>
            </div>)
        })}
        </div>
    )
}

export default Home;
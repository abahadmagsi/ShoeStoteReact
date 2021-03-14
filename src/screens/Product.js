import ShoeData from '../config/ShoeData.json'
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root:{
        width:'50%',
        display:'flex',
        margin:'0 auto',
        flexDirection:'column',
        flexWrap:'nowrap',
        padding:'0 auto',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:100
    },
    imgDiv:{
        border:'1px solid black',
        width:'100%',
    },
    btn:{
        height:'100%',
        fontSize:20
    }
})

const Product = () => {
  const classes = useStyles();
    
    const {Id} = useParams()
    return(
        <div className={classes.root}>
            <div className={classes.imgDiv}>
            <img src={ShoeData[Id].img} width='100%'/>
            </div>
                <h1>{ShoeData[Id].name}</h1>
                <p>Discription</p>
                <button className={classes.btn}>Add to List</button>
        </div>
    )
}

export default Product;
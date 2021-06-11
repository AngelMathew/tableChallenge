import React,{useState} from 'react';
import styles from './Table.module.css';


const TableOne=(props:any)=>{
    const [data,setData]=useState([...props.data])
    const unSortedData=[...props.data];
    const header=[...props.columns]
    const [sorteDirection, setsorteDirection] = React.useState({direction:"asc"});

    // To sort selected columns 
    if(props.sort){
    header.forEach((element:any)=>{
            if(props.sort.includes(element.accessor)){
                element.sort=true
            }
            else{
                element.sort=false 
            }
    })}
   
    // Function to convert country code to flag emoji
    const getFlagEmoji=(countryCode:String)=> {
        const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char =>  {return 127397 + char.charCodeAt(0)}); 
        let flag=codePoints.splice(0,2)
    return String.fromCodePoint(...flag);
    }

    // Convert rating to star emoji
    const getStarEmoji=(rating:number)=>{
        return `★`.repeat(rating)
    }


    //Sort Function
    const getsortColumn= (column:string)=>{

        if(sorteDirection.direction==="asc"){
            // To change sort arrow direction to up
            header.forEach((e:any)=>{
                if(e.accessor===column){
                    e.sortDirection="headerSortUp"
                }
                else{
                    e.sortDirection=""
                }
            })
            setsorteDirection({direction:"dsc"})
        }
        if(sorteDirection.direction==="dsc"){
            // To change sort arrow direction to down
            header.forEach((e:any)=>{
                if(e.accessor===column){
                e.sortDirection="headerSortDown"
                }
                else{
                    e.sortDirection=""
                }
            })
            setsorteDirection({direction:""})
        }
        
        // To unsort the table
        if(sorteDirection.direction==="")
        {
            setsorteDirection({direction:"asc"})
            setData(unSortedData)
            header.forEach((e:any)=>{
                e.sortDirection=""
            })
        }
        else{
            const sortedArray=data.sort((a:any,b:any)=>{
                if(a[column]<b[column]){
                    return sorteDirection.direction==="asc" ? -1 : 1;
                    }
                if(b[column]<a[column]){
                    return sorteDirection.direction==="asc" ? 1 : -1;
                    }
                return 0
        })
        return sortedArray;
        }
    }

// Table header
const tableHeader=header.map((element:any,i:number)=>{
    return(
    <th key={i} className={(element.sort? `${styles["headerSort"]}` :`${styles["noSorting"]}`) + ` ${styles[element.sortDirection]}` }   onClick={()=>getsortColumn(element.accessor)}>{element.header}</th> 
    )
})

// Table rows
const tableRows=data.map((element:any,i:number)=>{
    return (<tr key={i}>
    {
        header.map((header:any,i:number)=>{
            const accessor=header.accessor
            if(accessor==="country"){
                return (
                    <td key={i} >{getFlagEmoji(element[accessor])}</td>
                ) 
            }
            else if(accessor==="movie_rating"){
                return (
                <td key={i} >{getStarEmoji(element[accessor])}</td>
                ) 
            }
        return <td key={i} className={(header.accessor==="inventory"? ` ${styles["inventoryBackground"]} ` : null ) + (header.accessor==="item"? ` ${styles["itemBackground"]} ` :` null `)}   >{element[accessor]}</td>
        
        }) 
    }
    </tr>)
})

return (
    <div className={styles.tableWrapper}>
        <div className={styles.tableScroll}>
        <table>
            <thead>
                <tr>{tableHeader}</tr> 
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
        </div>
    </div>
)
}

export default TableOne;



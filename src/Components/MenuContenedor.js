
export const MenuContenedor = ({children}) => {

const styles={
    margin : '0 auto',
    width: '100%',
    heigt : '150 auto'
}

return(

    <div style={styles} >        
        {children}
    </div>
)

};
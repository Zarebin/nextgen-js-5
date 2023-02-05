import React from 'react';
import style from'./Search.module.css'
class Search extends React.Component {
    state = {title:" "};
    onSubmit =(e) =>{
        e.preventDefault();
        this.props.onSearch(this.state.title);
        console.log(this.state.title);

    };
    onSearchChanged  = (e) =>{
        const  _title = e.target.value;
        this.setState({title:_title});
        console.log(_title); 

     };
    render() {
        return(
            <div className={style.formcontainer}>
                <form className={style.formcontainer__form} onSubmit={this.onSubmit}>
                    <div>
                        <label>Search</label>
                        <input value={this.state.title} onChange={this.onSearchChanged} id="video" type="text"/>
                    </div>
                </form>
            </div>
        )
    }
};
export default Search;
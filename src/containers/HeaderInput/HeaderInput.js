import React from 'react';
import SearchInput from '../../components/Search/Search'
function HeaderInput(props) {
  return(
    <div>
      <SearchInput placeholder="请输入要查找的关键词" buttonName="查找" handleSubmit={props.searchHandle}/>
    </div>
  )
}
export default HeaderInput
// the content of subscription page

import React, { useState } from 'react';
import WrapContainer from '../../../Containers/WrapContainer/WrapContainer';
import Search from '../../Ui/Search/Search';
import { Heading } from './SubscriptionStyle';
import Filter from '../../Ui/Filter/Filter';
import FilterOption from '../../FilterOption/FilterOption';
import SubscriptionInfo from '../../SubscriptionInfo/SubscriptionInfo';
import DataPlan from '../../DataPlan/DataPlan';
import { useSelector } from 'react-redux';


const Subscription = () => {
  // const that determines whether to show filter option or not
  const [showFilterOption, setFilterOption] = useState(false);
  const c = useSelector((state: any) => state.cus);

  // the values of filter and search
  const [filtervalue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  // the onchange handler for search input
  const searchHandler = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  // the onchange handler for filter input
  const filterHandler = (value: string) => {
    setFilterValue(value.toLowerCase());
  };

  // the handler for toggling the filter option
  const toggle = () => {
    setFilterOption(!showFilterOption);
    setFilterValue('');
  };

  let filterOption = showFilterOption ? (
    <FilterOption valueHandler={filterHandler} handler={toggle}></FilterOption>
  ) : (
    ''
  );
  return (
    <div>
      <Heading color={c.colorvalue[2].value}>Subscriptions</Heading>
      <WrapContainer>
        <Search onKeyUp={searchHandler} />
        <Filter toggleHandler={toggle} />
      </WrapContainer>
      {filterOption}
      <SubscriptionInfo></SubscriptionInfo>
      <DataPlan searchValue={searchValue} filterValue={filtervalue}></DataPlan>
    </div>
  );
};

export default Subscription;

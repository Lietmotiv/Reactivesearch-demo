import React, {Component} from 'react';
import {ReactiveBase, NumberBox, DateRange, RangeSlider, ResultCard} from '@appbaseio/reactivesearch';

export default() => (
  <div className="container">
    <ReactiveBase
      app="Airbase"
      credentials="vigwQaBMU:17817ded-d5bf-4f1d-ac46-1e0d8ed214fd"
      type="listing"
      theme={{
      primaryColor: '#FFCC00'
    }}>
      <nav className="nav">
        <div className="title">airbeds</div>
      </nav>
      <div className="left-col">
        <DateRange
          dataField="date_from"
          componentId="DateRangeSensor"
          title="When"
          numberOfMonths={2}
          queryFormat="basic_date"
          initialMonth={new Date('04-01-2017')}/>

        <NumberBox
          componentId="GuestSensor"
          dataField="accommodates"
          title="Guests"
          defaultSelected={2}
          labelPosition="right"
          data={{
          start: 1,
          end: 16
        }}/>

        <RangeSlider
          componentId="PriceSensor"
          dataField="price"
          title="Price Range"
          range={{
          start: 10,
          end: 250
        }}
          rangeLabels={{
          start: '$10',
          end: '$250'
        }}
          defaultSelected={{
          start: 10,
          end: 50
        }}
          stepValue={10}
          interval={20}
          react={{
          and: ['DateRangeSensor']
        }}/>
      </div>

      <ResultCard
        className="right-col"
        componentId="SearchResult"
        dataField="name"
        size={12}
        onData={data => ({image: data.image, title: data.name, description: (
          <div>
            <div className="price">${data.price}</div>
            <p className="info">{data.room_type}
              · {data.accommodates}
              guests</p>
          </div>
        ), url: data.listing_url})}
        pagination
        react={{
        and: ['GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search']
      }}
        innerClass={{
        resultStats: 'result-stats',
        list: 'list',
        listItem: 'list-item',
        image: 'image'
      }}/>
    </ReactiveBase>
  </div>
);

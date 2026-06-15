import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = () => {
    goodsAPI.getAll().then(receivedGoods => {
      setGoods(receivedGoods);
    });
  };

  const handleGet5First = () => {
    goodsAPI.get5First().then(receivedGoods => {
      setGoods(receivedGoods);
    });
  };

  const handleGetRedGoods = () => {
    goodsAPI.getRedGoods().then(receivedGoods => {
      setGoods(receivedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

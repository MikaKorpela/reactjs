import React, { Component } from 'react';

class ItemList extends Component
{
  constructor()
  {
    super();
    // this.state =
    // {
    //   items: [
    //     {id: 1, name: 'List item 1'},
    //     {id: 2, name: 'List item 2'},
    //     {id: 3, name: 'List item 3'},
    //     {id: 4, name: 'List item 4'}
    //   ],
    //   hasErrored: false,
    //   isLoading: false
    // };
    this.state = {
      items: [],
      hasErrored: false,
      isLoading: false
    }
  }

  fetchData(url)
  {
    this.setState({ isLoading: true });
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
  
        this.setState({ isLoading: false });
  
        return response;
      })
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch(() => this.setState({ hasErrored: true }));
  }
  
  componentDidMount()
  {
    this.fetchData('http://192.168.99.100:32386/');
  }

  render()
  {
    if (this.state.hasErrored)
    {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading)
    {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;

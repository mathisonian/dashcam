const React = require('react');
const IdyllComponent = require('idyll-component');
const Reactable = require('reactable');
const Table = Reactable.Table;
const Tr = Reactable.Tr;
const Td = Reactable.Td;

const colors = ['#008ABE', '#000000', '#888', '#fff'];

class TableComponent extends IdyllComponent {
  render() {
    return (
      <Table className={`table ${this.props.className || ''}`}>
        {
          this.props.data.map((d, i) => {
            return (
              <Tr key={i}>
                <Td column="Rank">{i+1}</Td>
                <Td column="Response">{d.Response}</Td>
                <Td column="Count">{d.Count}</Td>
                <Td column="" className={'desktop'}><svg width={11} height={11}><rect x={0} y={0} width={10} height={10} fill={colors[Math.min(colors.length - 1, i)]} stroke={'#000'} strokeWidth={1} /></svg></Td>
              </Tr>
            )
          })
        }
      </Table>
    );
  }
}

module.exports = TableComponent;

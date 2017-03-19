const React = require('react');
const IdyllComponent = require('idyll-component');
const Reactable = require('reactable');
const Table = Reactable.Table;
const Tr = Reactable.Tr;
const Td = Reactable.Td;

class TableComponent extends IdyllComponent {
  render() {
    const data = this.props.data.map((d) => {
      return {
        'company': d.key,
        'totalComplaints': d.values.totalComplaints,
        'percentTimelyResponse': Math.round(d.values.percentTimelyResponse * 100 * 10) / 10,
        'percentCustomerDisputed': Math.round(d.values.percentCustomerDisputed * 100 * 10) / 10,
        'topIssue': d.values.topIssue
      };
    });
    return (
      <Table className="table">
        {
          data.map((d, i) => {
            return (
              <Tr key={i}>
                <Td column="Company">{d.company}</Td>
                <Td column="Most Frequent Issue">{d.topIssue}</Td>
                <Td column="Total Complaints" className="number">{d.totalComplaints}</Td>
                <Td column="% Timely Response"className="number">{d.percentTimelyResponse}</Td>
                {/*<Td column="% Customer Disputed" className="number">{Math.round(d.percentCustomerDisputed * 100 * 10) / 10}</Td>*/}
              </Tr>
            )
          })
        }
      </Table>
    );
  }
}

module.exports = TableComponent;

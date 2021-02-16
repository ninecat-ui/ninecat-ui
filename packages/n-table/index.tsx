import { defineComponent, App } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const TableProps = {
  columns: {
    type: Array,
    default: function () {
      return [];
    }
  },
  data: {
    type: Array,
    default: function () {
      return [];
    }
  },
  border: {
    type: [Boolean, String],
    default: true
  },
  rowClick: {
    type: Function,
    default: null
  },
  rowDbclick: {
    type: Function,
    default: null
  }
};

export type TextAlignProperty = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'

const NTable = defineComponent({
  name: 'NTable',
  props: TableProps,
  setup (props) {
    const currentColumns = props.columns.map(item => {
      return {
        width: 200,
        align: 'left',
        title: '',
        ...(item as object)
      };
    });

    const tdClass = classNames(['tabel-td', props.border ? 'border' : '']);

    const dealTableData = (currentDataItem, currentColumns) => {
      const res = [];
      currentColumns.forEach((item) => {
        res.push(currentDataItem[item.dataIndex]);
      });
      return res;
    };

    const onClickRow = (dataItem, e) => {
      props.rowClick(dataItem, e);
    };

    const onDbClickRow = (dataItem, e) => {
      props.rowDbclick(dataItem, e);
    };

    const rednerThead = () => {
      const res = currentColumns.map((colum, index) => {
        return <th key={index} style={{ width: colum.width + 'px', textAlign: colum.align as TextAlignProperty }}>{colum.title}</th>;
      });
      return (<thead><tr>{res}</tr></thead>);
    };

    const renderThbody = () => {
      const res = props.data.map((dataItem, index) => {
        return <tr key={index} onClick={e => onClickRow(dataItem, e)} onDblclick={e => onDbClickRow(dataItem, e)}>
          {renderTd(dataItem, currentColumns)}
        </tr>;
      });
      return (<tbody>{res}</tbody>);
    };

    const renderTd = (dataItem, currentColumns) => {
      const tableData = dealTableData(dataItem, currentColumns);
      const res = tableData.map((tditem, itemIndex) => {
        return <td key={itemIndex} class={tdClass} style={{ textAlign: currentColumns[itemIndex].align as TextAlignProperty }}>{tditem}</td>;
      });
      return res;
    };

    return () => (
      <div class="tabel-content">
        <table class="base-table">
            {rednerThead()}
            {renderThbody()}
        </table>
      </div>
    );
  }
});

NTable.install = function (app:App) {
  app.component(NTable.name, NTable);
};

export default NTable;

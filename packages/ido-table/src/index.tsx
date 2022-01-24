import { defineComponent, toRefs } from 'vue';
import Header from './header';

export default defineComponent({
  name: 'IdoTable',
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { columns } = { ...props };

    const headerProps = {
      columns,
    };
    return () => {
      return (
        <div>
          <Header {...headerProps} />
          {/* <tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </tbody> */}
        </div>
      );
    };
  },
});

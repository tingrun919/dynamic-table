import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'IdoTableHeader',
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { columns } = { ...props };
    return () => {
      return (
        <div style={'border: 1px solid'}>
          {columns.map((item) => {
            return <th>{item.title}</th>;
          })}
        </div>
      );
    };
  },
});

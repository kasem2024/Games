import useStore from "../store";


const OrderSelector = () => {
  const sortOrders = [
    { value: 'relavance', label: 'Relevance' },
    { value: 'added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: 'released', label: 'Release date' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'rating', label: 'Average rating' },
  ];
  const setSortOrders = useStore((s)=>s.setSortOrder)
  return (
    <div className="w-[50%]">
    <select name="order" 
    className="bg-primary  border-none outline-none px-0 py-2 md:px-3 md:py-2 lg:px-6 lg:py-3 rounded-md shadow-md w-fit lg:w-[90%] "
    onChange={(e)=>setSortOrders(e.currentTarget.value)}>
       {sortOrders.map((ordertype)=> <option value={ordertype.value} key={ordertype.label} >{ordertype.label}</option>)}
      
    </select>
</div>
  )
}

export default OrderSelector
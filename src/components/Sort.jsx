const Sort = () => {

  return (
    <div>
      <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort">
          <option value="lowest">Price(lowest)</option>
          <option value="lowest">Price(highest)</option>
          <option value="lowest">Price(a-z)</option>
          <option value="lowest">Price(z-a)</option>
        </select>
      </form>
    </div>
  )

}

export default Sort;
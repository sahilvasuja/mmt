
 const Bigdiv = () => {
  return (
    <div className="flex flex-row">
      <div className="border border-black w-1/4 h-36 flex flex-col p-5 text-black">
      <h5 className="text-xl">FROM</h5>
      <h2 className="text-4xl font-bold">DELHI</h2>
      <h4 className="text-lg">DEL,DELHI AIRPORT INDIA</h4>
      </div>
    <div className="border border-black w-1/4 h-36 flex flex-col px-7 py-3 text-black"> 
        
          <h5 className="text-xl">TO</h5>
          <h2 className="text-4xl font-bold">BENGALURU</h2>
          <h4 className="text-lg">BLR,Bengaluru International AIRPORT...</h4>
        
    </div>
    <div className="border border-black w-1/5 h-36 flex flex-col px-7 py-3 text-black">
        <div className="text-xl">DEPARTURE </div>
        <div className="text-4xl font-bold">7 Oct'22</div>
        <div className="text-lg">Friday</div>
    </div>
    <div className="border border-black w-1/5 h-36 flex flex-col px-7 py-3 text-black">
        <div className="text-xl">RETURN</div>
        
        <div className="text-lg">Tap to add a return date for bigger discounts</div>
    </div>
    <div className="border border-black w-1/4 h-36 flex flex-col py-3 px-3"> 
    <div className="text-xl text-gray-500">TRAVELLERS & CLASS </div>
        <div className="text-4xl font-bold text-black">1 Traveller</div>
        <div className="text-lg text-gray-600">Economy/Premium Economy</div>
        <div className="text-orange-700">Group Booking Now Available!</div>
    </div>
</div>
  )
}
export  default Bigdiv
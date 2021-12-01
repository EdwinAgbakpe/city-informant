/* eslint-disable no-unused-vars */
interface ILandmarkItem{
  name: string,
  onRemove: (e:any)=>void,
  index: number,
}

export const LandmarkItem = function ({ name, onRemove, index }: ILandmarkItem) {
  return (
    <div className=" rounded-xl bg-silver text-white font-light p-2 max-width-content">
      <div className="flex flex-wrap justify-center gap-3 text-xl items-center">
        <h3>{name}</h3>
        <button onClick={onRemove} type="button">
          <h3 className="text-red font-bold text-3xl text-center" data-listid={index}>x</h3>
        </button>
      </div>
    </div>
  );
};

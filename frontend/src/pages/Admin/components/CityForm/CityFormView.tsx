/* eslint-disable no-unused-vars */
import { LinkButton } from '@components/LinkButton';
import { Button } from '@components/Button';
import { dashboard } from '@navigation/Constants';
import { IconButton } from '@components/IconButton';
import { PlusIcon } from '@heroicons/react/outline';
import { Form } from '../Form';
import { TextBox } from '../TextBox';
import { LandmarkItem } from './LandmarkItem';

interface ICityFormView{
  onChange: (e:any)=>void,
  onSubmit: (e:any)=>void,
  form: any,
  landmarks: string[],
  errors: any[],
  isAdd: boolean,
  onDelete: (e:any)=>void,
  onAddLandmark: (e:any)=>void,
  onRemoveLandmark: (e:any)=>void,
}

export const CityFormView = function ({
  onChange,
  onSubmit,
  form,
  errors,
  landmarks,
  isAdd,
  onDelete,
  onAddLandmark,
  onRemoveLandmark,
}: ICityFormView) {
  return (
    <div className="flex justify-center">
      <Form title={isAdd ? 'Add City' : 'City Information'}>
        <div className="space-y-6">
          {/* <div className="space-y-2">
            {errors.map((err, index) => (
              <div className="text-red font-light text-center" key={index}>
                {err}
              </div>
            ))}
          </div> */}
          <div className="space-y-3">
            <TextBox
              type="text"
              label="Name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={onChange}
            />
            <TextBox
              type="text"
              label="Native Name"
              name="name_native"
              placeholder="Native Name"
              value={form.name_native}
              onChange={onChange}
            />
            <TextBox
              type="text"
              label="Country"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={onChange}
            />
            <TextBox
              type="text"
              label="Continent"
              name="continent"
              placeholder="Continent"
              value={form.continent}
              onChange={onChange}
            />
            <div className="flex flex-wrap gap-2 justify-center w-full">
              <TextBox
                type="number"
                label="Population"
                name="population"
                placeholder="0"
                value={form.population}
                onChange={onChange}
              />
              <TextBox
                type="number"
                label="Founded"
                name="founded"
                placeholder="0"
                value={form.founded}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center w-full">
              <TextBox
                type="number"
                label="Latitude"
                name="latitude"
                placeholder="0.0"
                value={form.latitude}
                onChange={onChange}
              />
              <TextBox
                type="number"
                label="Longitude"
                name="longitude"
                placeholder="0.0"
                value={form.longitude}
                onChange={onChange}
              />
            </div>
            <div id="landmarksSection" className="flex flex-wrap flex-col gap-2">
              <div className="flex flex-wrap justify-center items-end gap-2">
                <TextBox
                  type="text"
                  label="Add Landmark"
                  name="addLandmark"
                  placeholder="Landmark"
                  value={form.addLandmark}
                  onChange={onChange}
                />
                <IconButton icon={<PlusIcon className="h-full w-full" />} isPrimary onClick={onAddLandmark} />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {landmarks.map((landmark: string, index: number) => (
                  <LandmarkItem
                    name={landmark}
                    key={index}
                    index={index}
                    onRemove={onRemoveLandmark}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  isPrimary
                  isCancel={false}
                  text={isAdd ? 'Add' : 'Save'}
                  onClick={onSubmit}
                />
                {!isAdd && (
                <Button
                  isPrimary
                  isCancel
                  text="Delete"
                  onClick={onDelete}
                />
                )}
              </div>
              <LinkButton to={dashboard} text="Cancel" />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

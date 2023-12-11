import { createSelector } from 'reselect';

export const getFilters = (state) => state.filters;
export const getAdverts = (state) => state.advert.items;

export const getFilteredAdverts = createSelector(
  [getFilters, (state) => state],
  (filters, state) => {
    const { carBrand, hourlyPrice, mileage } = filters;

    return state.advert.items.filter((car) => {
      if (carBrand && car.make !== carBrand) return false;

      if (
        hourlyPrice &&
        parseInt(car.rentalPrice.replace('$', ''), 10) > parseInt(hourlyPrice)
      )
        return false;

      if (mileage) {
        const mileageFrom =
          mileage.from !== '' ? parseInt(mileage.from, 10) : 0;
        const mileageTo =
          mileage.to !== '' ? parseInt(mileage.to, 10) : Infinity;

        if (car.mileage < mileageFrom || car.mileage > mileageTo) return false;
      }

      return true;
    });
  }
);

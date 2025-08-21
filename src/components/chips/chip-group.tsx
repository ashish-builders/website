import * as React from 'react';
import { usePopupState, bindTrigger, bindPopover } from 'material-ui-popup-state/hooks';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Popover from '@mui/material/Popover';

type ChipGroupProps = {
  children: React.ReactElement<typeof Chip>[];
};

function ChipGroup({ children }: ChipGroupProps) {
  const popupState = usePopupState({
    popupId: 'chip-group-popover',
    variant: 'popover',
  });
  const chips = React.Children.toArray(children) as React.ReactElement<typeof Chip>[];
  if (!chips || chips.length === 0) {
    return null;
  }
  const first = chips[0];
  const extra = chips.slice(1);
  return (
    <Box display="flex" flexWrap="wrap" gap={1}>
      {first}
      {extra.length > 0 && (
        <React.Fragment>
          <Chip
            color="default"
            label={`+${extra.length}`}
            size="small"
            variant="outlined"
            {...bindTrigger(popupState)}
            sx={{ cursor: 'pointer' }}
          />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
                maxWidth: 300,
              }}
              p={2}
            >
              {extra.map((chip, idx) =>
                React.cloneElement(chip, {
                  key: chip.key ?? idx,
                }),
              )}
            </Box>
          </Popover>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ChipGroup;

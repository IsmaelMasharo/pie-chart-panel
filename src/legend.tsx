// @ts-nocheck
import React from 'react';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

function entity(character) {
  return `&#${character.charCodeAt(0).toString()};`;
}

export const Swatches = ({
  color,
  columns = null,
  format = x => x,
  swatchSize = 12,
  swatchWidth = swatchSize,
  swatchHeight = swatchSize,
  marginLeft = 0,
  verticalLegend,
  style,
}) => {
  const styles = getStyles(marginLeft, swatchWidth, swatchHeight);

  if (!!columns) {
    return (
      <div className={styles.legendContainer} style>
        <div style={{ width: '100%', columns: columns }}>
          {color.domain().map(value => {
            const label = format(value);
            return (
              <div className={styles.legendItem}>
                <div
                  className={cx(
                    styles.legendSwatch,
                    css`
                      background: ${color(value)};
                    `
                  )}
                />
                <div className={styles.legendLabel} title={label.replace(/["&]/g, entity)}>
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.legendContainer}
      style={{
        flexDirection: verticalLegend ? 'column' : 'row',
        alignItems: verticalLegend ? 'start' : 'inherit',
        ...style,
      }}
    >
      {color.domain().map(value => (
        <span
          className={cx(
            styles.legendHorizontal,
            css`
              --color: ${color(value)};
            `
          )}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

const getStyles = stylesFactory((marginLeft, swatchWidth, swatchHeight) => {
  return {
    legendContainer: css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-left: ${+marginLeft}px;
      min-height: 33px;
      font: 12px sans-serif;
      overflow: hidden;
      white-space: nowrap;
    `,
    legendItem: css`
      break-inside: avoid;
      display: flex;
      align-items: center;
      padding-bottom: 5px;
    `,
    legendLabel: css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - ${+swatchWidth}px - 0.5em);
    `,
    legendSwatch: css`
      width: ${+swatchWidth}px;
      height: ${+swatchHeight}px;
      margin: 0 0.5em 0 0;
    `,
    legendHorizontal: css`
      display: inline-flex;
      align-items: center;
      margin-right: 1em;
      &::before {
        content: '';
        width: ${+swatchWidth}px;
        height: ${+swatchHeight}px;
        margin-right: 0.5em;
        background: var(--color);
      }
    `,
  };
});

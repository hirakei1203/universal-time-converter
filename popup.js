document.addEventListener('DOMContentLoaded', function() {
  // CSS スタイルを追加
  const style = document.createElement('style');
  style.textContent = `
    .timezone-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-size: cover;
      vertical-align: middle;
      margin-right: 5px;
    }
    .globe-icon {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%234285F4" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"/><path fill="%23FFFFFF" d="M256 48c-2.5 0-5 .1-7.5.2 2.5-.1 5-.2 7.5-.2zM256 464c-2.5 0-5-.1-7.5-.2 2.5.1 5 .2 7.5 .2zM193.5 52.9c-1.4.1-2.8.3-4.2.4 1.4-.1 2.8-.3 4.2-.4zM318.5 459.1c1.4-.1 2.8-.3 4.2-.4-1.4.1-2.8.3-4.2.4zM189.3 53.3l-1.8.2 1.8-.2zM322.7 458.7l1.8-.2-1.8.2z"/><path fill="%23FFFFFF" d="M256 79.8c11.2 0 22.1.9 32.7 2.7-11-5.7-29.5-8.9-32.7-9.3-3.1.4-21.7 3.6-32.7 9.3 10.6-1.8 21.5-2.7 32.7-2.7zM256 432.2c-11.2 0-22.1-.9-32.7-2.7 11 5.7 29.5 8.9 32.7 9.3 3.1-.4 21.7-3.6 32.7-9.3-10.6 1.8-21.5 2.7-32.7 2.7z"/><path fill="%23FFFFFF" d="M319.5 91.3c-10.3-5-21.5-8.7-33.2-10.8 5.5 3.5 10.8 7.5 15.7 11.9 6.2-.5 12.1-.8 17.5-.8 0-.1 0-.2 0-.3z"/><path fill="%23FFFFFF" d="M209.8 92.4c4.9-4.4 10.2-8.3 15.7-11.9-11.7 2.1-22.9 5.8-33.2 10.8v.3c5.4 0 11.3.2 17.5.8z"/><path fill="%23FFFFFF" d="M319.5 420.7c-10.3 5-21.5 8.7-33.2 10.8-5.5-3.5-10.8-7.5-15.7-11.9-6.2.5-12.1.8-17.5.8 0 .1 0 .2 0 .3z"/><path fill="%23FFFFFF" d="M209.8 419.6c-4.9 4.4-10.2 8.3-15.7 11.9 11.7-2.1 22.9-5.8 33.2-10.8v-.3c-5.4 0-11.3-.2-17.5-.8z"/><path fill="%23FFFFFF" d="M258.9 91.9l-5.8-.2-5.8.2c-2 1.5-3.8 5.8-5.2 13.3 3.5-.3 7.1-.4 10.8-.4h.3c3.8 0 7.4.1 10.9.4-1.4-7.5-3.2-11.8-5.2-13.3z"/><path fill="%23FFFFFF" d="M258.9 420.1l-5.8.2-5.8-.2c-2-1.5-3.8-5.8-5.2-13.3 3.5.3 7.1.4 10.8.4h.3c3.8 0 7.4-.1 10.9-.4-1.4 7.5-3.2 11.8-5.2 13.3z"/><path fill="%23FFFFFF" d="M398.9 256c0-5.8-.3-11.5-.9-17.1-1.9-1.3-3.8-2.6-6-3.8-2.4 0-4.9.1-7.4.1-4.3 0-8.9-.1-13.6-.3-3 10.2-6.9 20.5-11.5 30.7 4.6 10.2 8.5 20.5 11.5 30.7 4.8-.2 9.3-.3 13.6-.3 2.5 0 5 0 7.4.1 2.1-1.2 4.1-2.5 6-3.8.6-5.7.9-11.4.9-17.2 0-6.4-.3-12.7-1-18.9.7-6.3 1-12.6 1-19.2z"/><path fill="%23FFFFFF" d="M113.1 256c0 5.8.3 11.5.9 17.1 1.9 1.3 3.8 2.6 6 3.8 2.4 0 4.9-.1 7.4-.1 4.3 0 8.9.1 13.6.3 3-10.2 6.9-20.5 11.5-30.7-4.6-10.2-8.5-20.5-11.5-30.7-4.8.2-9.3.3-13.6.3-2.5 0-5 0-7.4-.1-2.1 1.2-4.1 2.5-6 3.8-.6 5.7-.9 11.4-.9 17.2 0 6.4.3 12.7 1 18.9-.7 6.3-1 12.6-1 19.2z"/><path fill="%23FFFFFF" d="M256 152c-30.3 0-62.9 2.8-93 7.7-3.6 11.5-6.6 23.4-8.8 35.8 30.4-5.5 64.7-8.6 101.8-8.6 37.1 0 71.4 3.1 101.8 8.6-2.2-12.4-5.2-24.3-8.8-35.8-30.1-4.9-62.7-7.7-93-7.7z"/><path fill="%23FFFFFF" d="M256 360c30.3 0 62.9-2.8 93-7.7 3.6-11.5 6.6-23.4 8.8-35.8-30.4 5.5-64.7 8.6-101.8 8.6-37.1 0-71.4-3.1-101.8-8.6 2.2 12.4 5.2 24.3 8.8 35.8 30.1 4.9 62.7 7.7 93 7.7z"/><path fill="%23FFFFFF" d="M352.5 256c0-35.4-3.2-67.8-8.5-95.7-10.3-1.4-21-2.3-32-2.3-19.4 0-36.3 1.8-49.9 5.2-6.4 28.4-10 61.6-10 92.9 0 31.2 3.7 64.5 10 92.9 13.6 3.3 30.5 5.2 49.9 5.2 11 0 21.7-.9 32-2.3 5.3-28 8.5-60.4 8.5-95.9z"/><path fill="%23FFFFFF" d="M159.5 256c0 35.4 3.2 67.8 8.5 95.7 10.3 1.4 21 2.3 32 2.3 19.4 0 36.3-1.8 49.9-5.2 6.4-28.4 10-61.6 10-92.9 0-31.2-3.7-64.5-10-92.9-13.6-3.3-30.5-5.2-49.9-5.2-11 0-21.7.9-32 2.3-5.3 28-8.5 60.4-8.5 95.9z"/></svg>');
    }
  `;
  document.head.appendChild(style);

  // カナダと日本の時差（カナダ太平洋時間の場合）: 日本は16時間先
  const TIME_DIFFERENCE = 16 * 60 * 60 * 1000; // ミリ秒に変換
  
  // カナダと日本のタイムゾーン
  const CANADA_TIMEZONE = 'America/Vancouver';
  const JAPAN_TIMEZONE = 'Asia/Tokyo';
  
  // デフォルトのタイムゾーン設定
  const DEFAULT_LEFT_TIMEZONE = 'America/Vancouver';
  const DEFAULT_RIGHT_TIMEZONE = 'Asia/Tokyo';
  
  // タイムゾーンごとのアイコン情報
  const TIMEZONE_ICONS = {
    // 北米
    'America/Vancouver': 'canada.png',
    'America/Edmonton': 'canada.png',
    'America/Toronto': 'canada.png',
    'America/Halifax': 'canada.png',
    'America/Los_Angeles': 'usa.png',
    'America/Denver': 'usa.png',
    'America/Chicago': 'usa.png',
    'America/New_York': 'usa.png',
    // 南米
    'America/Sao_Paulo': 'brazil.png',
    'America/Buenos_Aires': 'argentina.png',
    // ヨーロッパ
    'Europe/London': 'uk.png',
    'Europe/Paris': 'france.png',
    'Europe/Berlin': 'germany.png',
    'Europe/Madrid': 'spain.png',
    'Europe/Rome': 'italy.png',
    'Europe/Amsterdam': 'netherlands.png',
    'Europe/Zurich': 'switzerland.png',
    'Europe/Athens': 'greece.png',
    'Europe/Helsinki': 'finland.png',
    'Europe/Moscow': 'russia.png',
    // アフリカ
    'Africa/Cairo': 'egypt.png',
    'Africa/Johannesburg': 'southafrica.png',
    // アジア
    'Asia/Dubai': 'uae.png',
    'Asia/Mumbai': 'india.png',
    'Asia/Kolkata': 'india.png',
    'Asia/Dhaka': 'bangladesh.png',
    'Asia/Bangkok': 'thailand.png',
    'Asia/Singapore': 'singapore.png',
    'Asia/Shanghai': 'china.png',
    'Asia/Hong_Kong': 'hongkong.png',
    'Asia/Seoul': 'korea.png',
    'Asia/Tokyo': 'japan.png',
    // オセアニア
    'Australia/Perth': 'australia.png',
    'Australia/Sydney': 'australia.png',
    'Pacific/Auckland': 'newzealand.png'
  };
  
  // カナダのタイムゾーンリスト
  const CANADA_TIMEZONES = {
    'America/Vancouver': 'バンクーバー (PST/PDT)',
    'America/Edmonton': 'エドモントン (MST/MDT)',
    'America/Toronto': 'トロント (EST/EDT)',
    'America/Halifax': 'ハリファックス (AST/ADT)'
  };
  
  // 世界のタイムゾーンリスト
  const WORLD_TIMEZONES = {
    // 北米
    'America/Los_Angeles': 'ロサンゼルス (UTC-8/7)',
    'America/Denver': 'デンバー (UTC-7/6)',
    'America/Chicago': 'シカゴ (UTC-6/5)',
    'America/New_York': 'ニューヨーク (UTC-5/4)',
    // 南米
    'America/Sao_Paulo': 'サンパウロ (UTC-3)',
    'America/Buenos_Aires': 'ブエノスアイレス (UTC-3)',
    // ヨーロッパ
    'Europe/London': 'ロンドン (UTC+0/1)',
    'Europe/Paris': 'パリ (UTC+1/2)',
    'Europe/Berlin': 'ベルリン (UTC+1/2)',
    'Europe/Madrid': 'マドリード (UTC+1/2)',
    'Europe/Rome': 'ローマ (UTC+1/2)',
    'Europe/Amsterdam': 'アムステルダム (UTC+1/2)',
    'Europe/Zurich': 'チューリッヒ (UTC+1/2)',
    'Europe/Athens': 'アテネ (UTC+2/3)',
    'Europe/Helsinki': 'ヘルシンキ (UTC+2/3)',
    'Europe/Moscow': 'モスクワ (UTC+3)',
    // アフリカ
    'Africa/Cairo': 'カイロ (UTC+2)',
    'Africa/Johannesburg': 'ヨハネスブルグ (UTC+2)',
    // アジア
    'Asia/Dubai': 'ドバイ (UTC+4)',
    'Asia/Mumbai': 'ムンバイ (UTC+5:30)',
    'Asia/Kolkata': 'コルカタ (UTC+5:30)',
    'Asia/Dhaka': 'ダッカ (UTC+6)',
    'Asia/Bangkok': 'バンコク (UTC+7)',
    'Asia/Singapore': 'シンガポール (UTC+8)',
    'Asia/Shanghai': '上海 (UTC+8)',
    'Asia/Hong_Kong': '香港 (UTC+8)',
    'Asia/Seoul': 'ソウル (UTC+9)',
    'Asia/Tokyo': '東京 (UTC+9)',
    // オセアニア
    'Australia/Perth': 'パース (UTC+8)',
    'Australia/Sydney': 'シドニー (UTC+10/11)',
    'Pacific/Auckland': 'オークランド (UTC+12/13)'
  };
  
  // 各行の選択された日付を保存するオブジェクト
  const rowSelectedDates = {};
  
  // 各行の選択された時間を保存するオブジェクト
  const rowSelectedTimes = {};
  
  // 各行のデータを保存するオブジェクト
  // 形式: {
  //   unixtime: 1234567890000,
  //   left: { timezone: "America/Toronto" },
  //   right: { timezone: "Asia/Tokyo" }
  // }
  const rowData = {};
  
  // 行追加ボタン
  const addRowBtn = document.getElementById('add-row-btn');
  addRowBtn.addEventListener('click', addNewRow);
  
  // 保存されたデータを読み込み
  loadSavedData();
  
  // 削除ボタンのイベントを設定
  setupDeleteButtons();
  
  // 時間入力のイベントを設定
  setupTimeInputs();
  
  // メモ入力のイベントを設定
  setupNoteInputs();

  // カレンダーと時間選択のイベントを設定
  setupDateTimeSelectors();

  // タイムゾーンアイコンを更新
  updateTimezoneIcons();
  
  // タイムゾーンアイコンのイベントを設定
  setupTimezoneIcons();
  
  /**
   * 特定のタイムゾーンに対応するアイコン要素を取得する
   * @param {string} timezone - タイムゾーン識別子
   * @return {string} - HTMLクラス名
   */
  function getTimezoneIconClass(timezone) {
    const iconFilename = TIMEZONE_ICONS[timezone] || 'globe.png';
    
    // アイコンファイルが存在するか確認
    // 存在する場合はそのファイルを使用、存在しない場合はデフォルトのグローブアイコンを使用
    return iconFilename === 'globe.png' ? 'globe-icon' : `timezone-icon-${timezone.replace(/\//g, '-')}`;
  }

  /**
   * すべてのタイムゾーンアイコンを更新する
   */
  function updateTimezoneIcons() {
    // すべての行を処理
    const rows = document.querySelectorAll('.row');
    
    rows.forEach((row, rowIndex) => {
      // この行のデータが存在しない場合はスキップ
      if (!rowData[rowIndex]) return;
      
      // 左側のアイコン
      const leftIconElement = row.querySelector('.timezone-box:first-child .timezone-icon');
      if (leftIconElement) {
        // 現在のすべてのクラスをクリア (timezone-iconは残す)
        leftIconElement.className = 'timezone-icon';
        
        // 新しいクラスを追加
        const leftTimezone = rowData[rowIndex].left.timezone;
        const leftIconClass = getTimezoneIconClass(leftTimezone);
        leftIconElement.classList.add(leftIconClass);
        
        // カスタムアイコンの場合はスタイルを設定
        if (leftIconClass !== 'globe-icon') {
          const iconFilename = TIMEZONE_ICONS[leftTimezone];
          if (iconFilename) {
            leftIconElement.style.backgroundImage = `url('icons/${iconFilename}')`;
          }
        }
      }
      
      // 右側のアイコン
      const rightIconElement = row.querySelector('.timezone-box:nth-child(2) .timezone-icon');
      if (rightIconElement) {
        // 現在のすべてのクラスをクリア (timezone-iconは残す)
        rightIconElement.className = 'timezone-icon';
        
        // 新しいクラスを追加
        const rightTimezone = rowData[rowIndex].right.timezone;
        const rightIconClass = getTimezoneIconClass(rightTimezone);
        rightIconElement.classList.add(rightIconClass);
        
        // カスタムアイコンの場合はスタイルを設定
        if (rightIconClass !== 'globe-icon') {
          const iconFilename = TIMEZONE_ICONS[rightTimezone];
          if (iconFilename) {
            rightIconElement.style.backgroundImage = `url('icons/${iconFilename}')`;
          }
        }
      }
    });
  }
  
  /**
   * 新しい行を追加する関数
   */
  function addNewRow() {
    const container = document.querySelector('.container');
    const addRowDiv = document.querySelector('.add-row');
    
    // 行番号を取得（既存の行数+1）
    const rowCount = document.querySelectorAll('.row').length + 1;
    const rowIndex = rowCount - 1; // 0ベースのインデックス
    
    // 新しい行を作成
    const newRow = document.createElement('div');
    newRow.className = 'row';
    newRow.innerHTML = `
      <div class="timezone-box">
        <span class="timezone-icon globe-icon" title="タイムゾーンを変更"></span>
        <input type="text" class="timezone-input" id="canada-input${rowCount}" placeholder="左側の時間">
      </div>
      <div class="timezone-box">
        <span class="timezone-icon globe-icon" title="タイムゾーンを変更"></span>
        <input type="text" class="timezone-input" id="japan-input${rowCount}" placeholder="右側の時間">
      </div>
      <div class="note-box">
        <input type="text" class="note-input" placeholder="メモ">
      </div>
      <div class="remove-box">
        <button class="delete-btn">×</button>
      </div>
    `;
    
    // 行を挿入
    container.insertBefore(newRow, addRowDiv);
    
    // 行のIDを取得して初期選択を明示的に削除
    const rowId = Array.from(document.querySelectorAll('.row')).indexOf(newRow);
    if (rowId !== -1) {
      // この行の選択データをクリア
      if (rowSelectedDates[rowId]) delete rowSelectedDates[rowId];
      if (rowSelectedTimes[rowId]) delete rowSelectedTimes[rowId];
      
      // 新しい行のデータを初期化
      rowData[rowId] = {
        unixtime: null,
        left: { timezone: DEFAULT_LEFT_TIMEZONE },
        right: { timezone: DEFAULT_RIGHT_TIMEZONE }
      };
    }
    
    // 新しい行の削除ボタンと時間入力にイベントを設定
    setupDeleteButtons();
    setupTimeInputs();
    setupNoteInputs();
    setupDateTimeSelectors(); // 新しい行にもカレンダー機能を設定
    setupTimezoneIcons(); // タイムゾーンアイコンのイベント設定
    
    // タイムゾーンアイコンを更新
    updateTimezoneIcons();
    
    // データを保存
    saveData();
  }
  
  /**
   * 削除ボタンにイベントリスナーを設定
   */
  function setupDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
      // すでにイベントリスナーが設定されていない場合のみ追加
      if (!button.hasAttribute('data-event-set')) {
        button.addEventListener('click', function() {
          const row = this.closest('.row');
          if (row) {
            row.remove();
            saveData(); // 行を削除した後にデータを保存
          }
        });
        button.setAttribute('data-event-set', 'true');
      }
    });
  }
  
  /**
   * 日付と時間を選択したときの処理
   * @param {Object} dateObj - 選択された日付オブジェクト
   * @param {string} timeStr - 選択された時間
   * @param {Element} inputElement - ソースとなる入力要素
   */
  function handleDateTimeSelection(dateObj, timeStr, inputElement) {
    if (!dateObj || !timeStr || !inputElement) return;
    
    const row = inputElement.closest('.row');
    if (!row) return;
    
    const rowId = Array.from(document.querySelectorAll('.row')).indexOf(row);
    if (rowId === -1) return;
    
    const canadaInput = row.querySelector('[id^="canada-input"]');
    const japanInput = row.querySelector('[id^="japan-input"]');
    if (!canadaInput || !japanInput) return;
    
    // この行のデータを初期化（存在しない場合）
    if (!rowData[rowId]) {
      rowData[rowId] = {
        unixtime: null,
        left: { timezone: DEFAULT_LEFT_TIMEZONE },
        right: { timezone: DEFAULT_RIGHT_TIMEZONE }
      };
    }
    
    // 入力元に基づいてタイムゾーンを特定
    const sourceTimezone = inputElement.id.includes('canada') 
      ? rowData[rowId].left.timezone 
      : rowData[rowId].right.timezone;
    
    // 日付と時間からタイムスタンプを生成
    const unixTime = convertLocalDateTimeToUnixTime(dateObj, timeStr, sourceTimezone);
    if (!unixTime) return;
    
    // タイムスタンプを保存
    rowData[rowId].unixtime = unixTime;
    
    // 左右のタイムゾーンに変換して表示
    canadaInput.value = formatUnixTimeToLocalDateTime(unixTime, rowData[rowId].left.timezone);
    japanInput.value = formatUnixTimeToLocalDateTime(unixTime, rowData[rowId].right.timezone);
    
    // データを保存
    saveData();
  }
  
  /**
   * 日付文字列をパースして日付オブジェクトを返す
   */
  function parseDateString(dateStr) {
    if (!dateStr || !dateStr.includes('/')) return null;
    
    // 日付文字列から日付部分を抽出する (例: "2023/12/25(月) 14:30" → "2023/12/25")
    const datePart = dateStr.includes('(') ? dateStr.split('(')[0].trim() : dateStr.trim();
    
    // 日付部分を年月日に分解
    const dateMatch = datePart.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
    if (!dateMatch) return null;
    
    return {
      year: parseInt(dateMatch[1], 10),
      month: parseInt(dateMatch[2], 10) - 1, // JavaScriptの月は0始まり
      day: parseInt(dateMatch[3], 10)
    };
  }
    
  /**
   * (時間を直接入力する場合)
   * 入力された時間と日付からタイムスタンプを作成し、入力フィールドを更新する共通処理
   */
  function processTimeInput(inputElement, isCanadaInput) {
    const row = inputElement.closest('.row');
    if (!row) return;
    
    const rowId = Array.from(document.querySelectorAll('.row')).indexOf(row);
    if (rowId === -1) return;
    
    const targetInput = isCanadaInput 
      ? row.querySelector('[id^="japan-input"]') 
      : row.querySelector('[id^="canada-input"]');
    
    if (!targetInput) return;
    
    // この行のデータを初期化（存在しない場合）
    if (!rowData[rowId]) {
      rowData[rowId] = {
        unixtime: null,
        left: { timezone: DEFAULT_LEFT_TIMEZONE },
        right: { timezone: DEFAULT_RIGHT_TIMEZONE }
      };
    }
    
    // 入力元と対象のタイムゾーンを取得
    const sourceTimezone = isCanadaInput ? rowData[rowId].left.timezone : rowData[rowId].right.timezone;
    const targetTimezone = isCanadaInput ? rowData[rowId].right.timezone : rowData[rowId].left.timezone;
    
    // 入力された時間を解析
    const inputValue = inputElement.value.trim();
    const selectedTime = parseTimeString(inputValue);
    
    if (!selectedTime) {
      // 時間のパースに失敗した場合はそのまま保存
      saveData();
      return;
    }
    
    // 選択された日付を取得
    let selectedDate = rowSelectedDates[rowId];
    
    // 入力に日付が含まれているか確認 (例: 2023/12/25(月) 14:30)
    const dateFromInput = parseDateString(inputValue);
    if (dateFromInput) {
      // 選択された日付を更新
      selectedDate = dateFromInput;
      rowSelectedDates[rowId] = selectedDate;
    }
    
    // 日付が選択されているかどうかで処理を分岐
    if (selectedDate) {
      // 日付と時間が両方ある場合はタイムスタンプベースで処理
      const formattedTime = formatTime(selectedTime.hours, selectedTime.minutes);
      rowSelectedTimes[rowId] = formattedTime;
      
      // タイムゾーンを指定してハンドラを呼び出す
      handleDateTimeSelection(selectedDate, formattedTime, inputElement);
    } else {
      // 日付がない場合は単純に時間変換のみ行う（旧方式）
      // 注: この部分は将来的に不要になるかもしれませんが、互換性のために残しています
      let targetHours, targetMinutes;
      
      if (isCanadaInput) {
        const japanTime = convertToJapanTime(selectedTime.hours, selectedTime.minutes);
        targetHours = japanTime.hours;
        targetMinutes = japanTime.minutes;
      } else {
        const canadaTime = convertToCanadaTime(selectedTime.hours, selectedTime.minutes);
        targetHours = canadaTime.hours;
        targetMinutes = canadaTime.minutes;
      }
      
      targetInput.value = formatTime(targetHours, targetMinutes);
      saveData();
    }
  }
  
  /**
   * 時間入力フィールドにイベントリスナーを設定
   */
  function setupTimeInputs() {
    // カナダ時間の入力フィールドすべてに対して
    const canadaInputs = document.querySelectorAll('[id^="canada-input"]');
    canadaInputs.forEach(input => {
      if (!input.hasAttribute('data-event-set')) {
        input.addEventListener('input', function() {
          processTimeInput(this, true); // カナダ入力フィールドとして処理
        });
        input.setAttribute('data-event-set', 'true');
      }
    });
    
    // 日本時間の入力フィールドすべてに対して
    const japanInputs = document.querySelectorAll('[id^="japan-input"]');
    japanInputs.forEach(input => {
      if (!input.hasAttribute('data-event-set')) {
        input.addEventListener('input', function() {
          processTimeInput(this, false); // 日本入力フィールドとして処理
        });
        input.setAttribute('data-event-set', 'true');
      }
    });
  }
  
  /**
   * メモ入力フィールドにイベントリスナーを設定
   */
  function setupNoteInputs() {
    const noteInputs = document.querySelectorAll('.note-input');
    noteInputs.forEach(input => {
      if (!input.hasAttribute('data-event-set')) {
        input.addEventListener('input', function() {
          saveData(); // データを保存
        });
        input.setAttribute('data-event-set', 'true');
      }
    });
  }
  
  /**
   * 時間文字列をパースする関数
   * "14:30"や"1430"や"2pm"などの形式に対応
   */
  function parseTimeString(timeStr) {
    // 日付部分を切り取る (例: "2023/12/25(月) 午後2:30" → "午後2:30")
    const timePart = timeStr.includes(') ') ? timeStr.split(') ')[1] : timeStr;
    
    if (!timePart || timePart.trim() === '') return null;
    
    let processedTimeStr = timePart.trim().toLowerCase();
    
    let hours = 0;
    let minutes = 0;
    
    // "1:30 AM"や"2:30 PM"形式
    if (processedTimeStr.includes(':') && (processedTimeStr.includes('am') || processedTimeStr.includes('pm'))) {
      const isPM = processedTimeStr.includes('pm');
      const timeParts = processedTimeStr.split(' ')[0].split(':');
      hours = parseInt(timeParts[0], 10);
      minutes = parseInt(timeParts[1], 10);
      
      if (isPM && hours < 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;
    }
    // "午前1:30"や"午後2:30"形式
    else if (processedTimeStr.includes('午前') || processedTimeStr.includes('午後')) {
      const isPM = processedTimeStr.includes('午後');
      const timeWithoutPrefix = processedTimeStr.replace('午前', '').replace('午後', '').trim();
      const timeParts = timeWithoutPrefix.split(':');
      hours = parseInt(timeParts[0], 10);
      minutes = parseInt(timeParts[1], 10);
      
      if (isPM && hours < 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;
    }
    // "14:30"形式
    else if (processedTimeStr.includes(':')) {
      const parts = processedTimeStr.split(':');
      hours = parseInt(parts[0], 10);
      minutes = parseInt(parts[1], 10);
    }
    // "2pm"や"2am"形式
    else if (processedTimeStr.includes('am') || processedTimeStr.includes('pm')) {
      const isPM = processedTimeStr.includes('pm');
      hours = parseInt(processedTimeStr.replace(/[^0-9]/g, ''), 10);
      if (isPM && hours < 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;
    }
    // "1430"形式
    else if (!isNaN(processedTimeStr) && processedTimeStr.length >= 3) {
      if (processedTimeStr.length === 3) {
        hours = parseInt(processedTimeStr.substring(0, 1), 10);
        minutes = parseInt(processedTimeStr.substring(1), 10);
      } else {
        hours = parseInt(processedTimeStr.substring(0, 2), 10);
        minutes = parseInt(processedTimeStr.substring(2), 10);
      }
    }
    // "14"や"2"形式
    else if (!isNaN(processedTimeStr)) {
      hours = parseInt(processedTimeStr, 10);
      minutes = 0;
    }
    else {
      return null; // パース不能な形式
    }
    
    // 時間と分が有効な範囲かチェック
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return null;
    }
    
    return { hours, minutes };
  }
  
  /**
   * 特定タイムゾーンでの日時をUnixタイムスタンプに変換する関数
   * @param {Object} dateObj - 日付オブジェクト ({ year, month, day })
   * @param {string} timeStr - 時間文字列
   * @param {string} timezone - 入力日時のタイムゾーン
   * @return {number|null} ミリ秒単位のUnixタイムスタンプまたはnull
   */
  function convertLocalDateTimeToUnixTime(dateObj, timeStr, timezone = DEFAULT_LEFT_TIMEZONE) {
    if (!dateObj || !timeStr) return null;
    
    const time = parseTimeString(timeStr);
    if (!time) return null;
    
    // 入力タイムゾーン用の日付文字列（'YYYY-MM-DD HH:MM:SS'形式）
    const dateTimeStr = `${dateObj.year}/${(dateObj.month + 1)}/${dateObj.day} ${time.hours}:${time.minutes}:00`;
    
    // タイムゾーン処理のためにmoment-timezoneライブラリを使用するか、
    // JavaScriptのDate.prototype.toLocaleStringを使った独自計算を行います
    
    // 入力のタイムゾーンでの時刻をUTCに変換
    // この実装では、一度UTC時間に変換した後、タイムスタンプを取得します
    
    // まず、入力されたローカル時間をそのまま解釈（ブラウザのローカルタイムゾーンでの時間として）
    const localDate = new Date(dateTimeStr);
    
    // 次に、この時間をオブジェクトとして表現
    const localYear = localDate.getFullYear();
    const localMonth = localDate.getMonth(); // 0-11
    const localDay = localDate.getDate();
    const localHours = localDate.getHours();
    const localMinutes = localDate.getMinutes();
    
    // ブラウザのタイムゾーンとの差分を計算（分単位）
    const localTZOffset = -new Date().getTimezoneOffset(); // 分単位で、UTC - ローカル時間
    
    // 目的のタイムゾーンのオフセットを取得
    const targetTZOffset = getTimezoneOffset(timezone);
    
    // タイムゾーン間の差分（分単位）
    const tzDiffMinutes = targetTZOffset - localTZOffset;
    
    // ローカル時間をベースに、目的のタイムゾーンの時間を作成
    const targetDate = new Date(
      localYear, 
      localMonth, 
      localDay, 
      localHours, 
      localMinutes - tzDiffMinutes
    );
    
    return targetDate.getTime();
  }
  
  /**
   * 指定されたタイムゾーンのUTCからのオフセットを分単位で取得する
   * @param {string} timezone - タイムゾーン識別子
   * @return {number} UTC からのオフセット（分単位、例: 東京は +540分）
   */
  // function getTimezoneOffset(timezone) {
  //   // 各タイムゾーンのオフセット（夏時間は考慮していない基本値）
  //   const timezoneOffsets = {
  //     'Asia/Tokyo': 540,            // 東京 UTC+9
  //     'America/Vancouver': -420,    // バンクーバー UTC-7
  //     'America/Edmonton': -360,     // エドモントン UTC-6
  //     'America/Toronto': -240,      // トロント UTC-4
  //     'America/Halifax': -180       // ハリファックス UTC-3
  //   };
    
  //   // リストにないタイムゾーンの場合、デフォルト値を返す
  //   return timezoneOffsets[timezone] || 0;
  // }
  function getTimezoneOffset(timezone) {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'shortOffset'
    });
    const parts = formatter.formatToParts(date);
    const offsetStr = parts.find(p => p.type === 'timeZoneName').value;
  
    // 例: "GMT-7"
    const match = offsetStr.match(/GMT([+-]\d+)/);
    if (match) {
      const hours = parseInt(match[1], 10);
      return hours * 60;
    }
  
    return 0;
  }
  
  
  /**
   * Unixタイムスタンプを特定タイムゾーンの日時文字列に変換する
   * @param {number} unixTime - 変換するUnixタイムスタンプ（ミリ秒）
   * @param {string} timezone - 変換先のタイムゾーン
   * @return {string} フォーマットされた日時文字列
   */
  function formatUnixTimeToLocalDateTime(unixTime, timezone) {
    if (!unixTime) return '';
    
    // Unixタイムスタンプから日時オブジェクトを作成
    const date = new Date(unixTime);
    
    // タイムゾーンを指定してフォーマット
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: timezone
    };
    
    // 日付と時間をフォーマット
    let formatted = date.toLocaleString('ja-JP', options);
    
    // 曜日を取得して追加
    const dayOfWeek = date.toLocaleString('ja-JP', { weekday: 'short', timeZone: timezone });
    
    // "2023/12/25 14:30" → "2023/12/25(月) 午後2:30"の形式に変更
    formatted = formatted.replace(' ', `(${dayOfWeek}) `);
    
    // AMとPMを午前と午後に置換
    formatted = formatted.replace('AM', '午前');
    formatted = formatted.replace('PM', '午後');
    
    return formatted;
  }
  
  /**
   * UnixタイムスタンプをUIの左側に表示するタイムゾーンの日時に変換
   * @param {number} unixTime - 変換するUnixタイムスタンプ（ミリ秒）
   * @return {string} フォーマットされた日時文字列
   */
  function formatUnixTimeToLeftTimezone(unixTime) {
    return formatUnixTimeToLocalDateTime(unixTime, DEFAULT_LEFT_TIMEZONE);
  }
  
  /**
   * UnixタイムスタンプをUIの右側に表示するタイムゾーンの日時に変換
   * @param {number} unixTime - 変換するUnixタイムスタンプ（ミリ秒）
   * @return {string} フォーマットされた日時文字列
   */
  function formatUnixTimeToRightTimezone(unixTime) {
    return formatUnixTimeToLocalDateTime(unixTime, DEFAULT_RIGHT_TIMEZONE);
  }
  
  /**
   * 時間を"14:30"形式にフォーマット
   */
  function formatTime(hours, minutes) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  
  /**
   * 曜日を取得する関数
   */
  function getDayOfWeek(year, month, day) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    return days[dayOfWeek];
  }
  
  /**
   * 画面上のデータを取得してオブジェクトに変換
   */
  function collectDataFromUI() {
    const rows = document.querySelectorAll('.row');
    const data = [];
    
    rows.forEach((row, index) => {
      const canadaInput = row.querySelector('[id^="canada-input"]');
      const japanInput = row.querySelector('[id^="japan-input"]');
      const noteInput = row.querySelector('.note-input');
      
      // この行のデータ（存在しない場合はデフォルト値を使用）
      const currentRowData = rowData[index] || {
        unixtime: null,
        left: { timezone: DEFAULT_LEFT_TIMEZONE },
        right: { timezone: DEFAULT_RIGHT_TIMEZONE }
      };
      
      data.push({
        canadaTime: canadaInput ? canadaInput.value : '',
        japanTime: japanInput ? japanInput.value : '',
        note: noteInput ? noteInput.value : '',
        rowData: currentRowData
      });
    });
    
    return data;
  }
  
  /**
   * データを保存
   */
  function saveData() {
    const data = collectDataFromUI();
    
    // 行ごとの選択された日付情報と時間情報も保存
    chrome.storage.local.set({ 
      'timezoneData': data,
      'rowSelectedDates': rowSelectedDates,
      'rowSelectedTimes': rowSelectedTimes,
      'rowData': rowData
    }, function() {});
  }
  
  /**
   * 保存されたデータを読み込む
   */
  function loadSavedData() {
    chrome.storage.local.get(['timezoneData', 'rowSelectedDates', 'rowSelectedTimes', 'rowData'], function(result) {
      // 日付データの読み込み
      if (result.rowSelectedDates) {
        Object.assign(rowSelectedDates, result.rowSelectedDates);
      }
      
      // 時間データの読み込み
      if (result.rowSelectedTimes) {
        Object.assign(rowSelectedTimes, result.rowSelectedTimes);
      }
      
      // 行データの読み込み
      if (result.rowData) {
        Object.assign(rowData, result.rowData);
      }
      
      if (result.timezoneData && result.timezoneData.length > 0) {
        // 最初の行は既にHTMLに存在するので、それを更新
        const existingRows = document.querySelectorAll('.row');
        
        // 保存されたデータで既存の行を更新
        for (let i = 0; i < Math.min(existingRows.length, result.timezoneData.length); i++) {
          const row = existingRows[i];
          const savedData = result.timezoneData[i];
          
          const canadaInput = row.querySelector('[id^="canada-input"]');
          const japanInput = row.querySelector('[id^="japan-input"]');
          const noteInput = row.querySelector('.note-input');
          
          if (canadaInput) canadaInput.value = savedData.canadaTime || '';
          if (japanInput) japanInput.value = savedData.japanTime || '';
          if (noteInput) noteInput.value = savedData.note || '';
          
          // 行データが保存されている場合は復元
          if (savedData.rowData) {
            rowData[i] = savedData.rowData;
          }
        }
        
        // 既存の行数より保存データが多い場合、新しい行を追加
        if (result.timezoneData.length > existingRows.length) {
          for (let i = existingRows.length; i < result.timezoneData.length; i++) {
            addNewRowWithData(result.timezoneData[i]);
          }
        }
      }
      
      // タイムゾーンアイコンを更新（保存データの読み込み後）
      updateTimezoneIcons();
    });
  }
  
  /**
   * データ付きの新しい行を追加
   */
  function addNewRowWithData(savedData) {
    const container = document.querySelector('.container');
    const addRowDiv = document.querySelector('.add-row');
    
    // 行番号を取得（既存の行数+1）
    const rowCount = document.querySelectorAll('.row').length + 1;
    const rowIndex = rowCount - 1;
    
    // 新しい行を作成
    const newRow = document.createElement('div');
    newRow.className = 'row';
    newRow.innerHTML = `
      <div class="timezone-box">
        <span class="timezone-icon globe-icon" title="タイムゾーンを変更"></span>
        <input type="text" class="timezone-input" id="canada-input${rowCount}" placeholder="左側の時間" value="${savedData.canadaTime || ''}">
      </div>
      <div class="timezone-box">
        <span class="timezone-icon globe-icon" title="タイムゾーンを変更"></span>
        <input type="text" class="timezone-input" id="japan-input${rowCount}" placeholder="右側の時間" value="${savedData.japanTime || ''}">
      </div>
      <div class="note-box">
        <input type="text" class="note-input" placeholder="メモ" value="${savedData.note || ''}">
      </div>
      <div class="remove-box">
        <button class="delete-btn">×</button>
      </div>
    `;
    
    // 行を挿入
    container.insertBefore(newRow, addRowDiv);
    
    // 行のIDを取得して初期選択を明示的に削除（rowDataに値がない場合）
    if (!savedData.canadaTime && !savedData.japanTime) {
      if (rowSelectedDates[rowIndex]) delete rowSelectedDates[rowIndex];
      if (rowSelectedTimes[rowIndex]) delete rowSelectedTimes[rowIndex];
    }
    
    // 行データを初期化（存在しない場合のみ）
    if (savedData.rowData) {
      rowData[rowIndex] = savedData.rowData;
    } else {
      rowData[rowIndex] = {
        unixtime: null,
        left: { timezone: DEFAULT_LEFT_TIMEZONE },
        right: { timezone: DEFAULT_RIGHT_TIMEZONE }
      };
    }
    
    // 新しい行の削除ボタンと時間入力にイベントを設定
    setupDeleteButtons();
    setupTimeInputs();
    setupNoteInputs();
    setupDateTimeSelectors(); // 新しい行にもカレンダー機能を設定
    setupTimezoneIcons(); // タイムゾーンアイコンのイベント設定
    
    // タイムゾーンアイコンを更新
    updateTimezoneIcons();
  }

  /**
   * カレンダーと時間選択機能を設定
   */
  function setupDateTimeSelectors() {
    // 時間入力フィールドすべてに対して
    const timeInputs = document.querySelectorAll('.timezone-input');
    
    timeInputs.forEach(input => {
      if (!input.hasAttribute('data-calendar-set')) {
        input.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // 既存のカレンダーを削除
          const existingCalendar = document.querySelector('.calendar-container');
          if (existingCalendar) {
            existingCalendar.remove();
          }
          
          // カレンダーを行追加ボタンの下に表示
          createCalendarBelow(input);
        });
        
        input.setAttribute('data-calendar-set', 'true');
      }
    });
    
    // ドキュメントクリックでカレンダーを閉じる
    // document.addEventListener('click', function(e) {
    //   const calendarContainer = document.querySelector('.calendar-container');
    //   // カレンダー内のクリックはカレンダーを閉じないようにする
    //   // また、日付セルのクリックもカレンダーを閉じないように除外する
    //   if (calendarContainer && 
    //       !calendarContainer.contains(e.target) && 
    //       !e.target.classList.contains('timezone-input') &&
    //       !e.target.closest('.calendar-container')) {
    //     calendarContainer.remove();
    //   }
    // });
  }
  
  /**
   * カレンダーを行追加ボタンの下に作成
   */
  function createCalendarBelow(inputElement) {
    // 入力フィールドが属する行のIDを取得
    const row = inputElement.closest('.row');
    const rowId = Array.from(document.querySelectorAll('.row')).indexOf(row);
    
    // 現在の日時を取得
    const now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    
    // この行の選択された日付を取得（存在しなければnull）
    let selectedDate = rowSelectedDates[rowId] || null;
  
    // この行の選択された時間を取得（存在しなければnull）
    let selectedTime = rowSelectedTimes[rowId] || null;

    // カレンダーコンテナを作成
    const calendarContainer = document.createElement('div');
    calendarContainer.className = 'calendar-container';
    calendarContainer.style.width = '100%';
    calendarContainer.style.backgroundColor = 'white';
    calendarContainer.style.border = '1px solid #ccc';
    calendarContainer.style.borderRadius = '5px';
    calendarContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    calendarContainer.style.padding = '10px';
    calendarContainer.style.marginTop = '10px';
    
    // カレンダーのレイアウト
    const calendarLayout = document.createElement('div');
    calendarLayout.style.display = 'flex';
    calendarLayout.style.flexDirection = 'column';
    
    // カレンダーを閉じるボタン
    const closeBtn = document.createElement('div');
    closeBtn.textContent = 'カレンダーを閉じる';
    closeBtn.style.textAlign = 'center';
    closeBtn.style.padding = '10px';
    closeBtn.style.marginBottom = '10px';
    closeBtn.style.backgroundColor = '#f0f0f0';
    closeBtn.style.borderRadius = '5px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.width = '100%';
    closeBtn.onclick = function() {
      calendarContainer.remove();
    };
    
    // コンテンツ部分 (カレンダーと時間選択を横に並べる)
    const contentLayout = document.createElement('div');
    contentLayout.style.display = 'flex';
    contentLayout.style.flexDirection = 'row';
    
    // 左側：カレンダー部分
    const calendarPart = document.createElement('div');
    calendarPart.style.flex = '3';
    calendarPart.style.paddingRight = '15px';
    
    // カレンダーヘッダー
    const calendarHeader = document.createElement('div');
    calendarHeader.style.display = 'flex';
    calendarHeader.style.justifyContent = 'space-between';
    calendarHeader.style.alignItems = 'center';
    calendarHeader.style.marginBottom = '10px';
    
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<';
    prevBtn.style.border = 'none';
    prevBtn.style.background = 'none';
    prevBtn.style.cursor = 'pointer';
    prevBtn.style.fontSize = '16px';
    prevBtn.style.padding = '5px 10px';
    prevBtn.onclick = function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    };
    
    const monthDisplay = document.createElement('div');
    monthDisplay.style.fontWeight = 'bold';
    
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>';
    nextBtn.style.border = 'none';
    nextBtn.style.background = 'none';
    nextBtn.style.cursor = 'pointer';
    nextBtn.style.fontSize = '16px';
    nextBtn.style.padding = '5px 10px';
    nextBtn.onclick = function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    };
    
    calendarHeader.appendChild(prevBtn);
    calendarHeader.appendChild(monthDisplay);
    calendarHeader.appendChild(nextBtn);
    
    // カレンダー本体
    const calendar = document.createElement('div');
    
    // 右側：時間選択部分
    const timeSelectionPart = document.createElement('div');
    timeSelectionPart.style.flex = '1';
    timeSelectionPart.style.borderLeft = '1px solid #eee';
    timeSelectionPart.style.paddingLeft = '15px';
    
    // 時間選択コンテナ
    const timeContainer = document.createElement('div');
    timeContainer.style.display = 'flex';
    timeContainer.style.flexDirection = 'column';
    timeContainer.style.overflowY = 'auto';
    timeContainer.style.maxHeight = '230px';
    
    // 時間オプション
    const timeOptions = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hour12 = h % 12 === 0 ? 12 : h % 12;
        const ampm = h < 12 ? 'AM' : 'PM';
        const minuteStr = m.toString().padStart(2, '0');
        timeOptions.push(`${hour12}:${minuteStr} ${ampm}`);
      }
    }
    
    timeOptions.forEach(time => {
      const timeOption = document.createElement('div');
      timeOption.textContent = time;
      timeOption.style.padding = '10px 15px';
      timeOption.style.textAlign = 'center';
      timeOption.style.cursor = 'pointer';
      timeOption.style.borderBottom = '1px solid #eee';
      
      // 選択済みの時間をハイライト表示
      if (selectedTime === time) {
        timeOption.style.backgroundColor = '#e0e9ff';
        timeOption.style.fontWeight = 'bold';
      }
      
      timeOption.onmouseover = function() {
        if (selectedTime !== time) {
          this.style.backgroundColor = '#f5f5f5';
        }
      };
      
      timeOption.onmouseout = function() {
        if (selectedTime !== time) {
          this.style.backgroundColor = '';
        }
      };
      
      timeOption.onclick = function() {
        // 選択された時間を保存
        selectedTime = time;
        rowSelectedTimes[rowId] = time;
        
        // 入力フィールドとその対応フィールドを更新（直接handleDateTimeSelectionを呼び出す）
        if (selectedDate) {
          handleDateTimeSelection(selectedDate, time, inputElement);
        }
      };
      
      timeContainer.appendChild(timeOption);
    });
    
    // カレンダーを更新する関数
    function updateCalendar() {
      // 月表示を更新
      monthDisplay.textContent = `${currentYear}年 ${currentMonth + 1}月`;
      
      // カレンダーをクリア
      calendar.innerHTML = '';
      
      // 曜日ヘッダー
      const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
      const headerRow = document.createElement('div');
      headerRow.style.display = 'grid';
      headerRow.style.gridTemplateColumns = 'repeat(7, 1fr)';
      headerRow.style.textAlign = 'center';
      headerRow.style.fontWeight = 'bold';
      headerRow.style.marginBottom = '5px';
      
      daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.textContent = day;
        if (day === '日') {
          dayHeader.style.color = 'red';
        } else if (day === '土') {
          dayHeader.style.color = 'blue';
        }
        headerRow.appendChild(dayHeader);
      });
      
      calendar.appendChild(headerRow);
      
      // 日付グリッド
      const datesGrid = document.createElement('div');
      datesGrid.style.display = 'grid';
      datesGrid.style.gridTemplateColumns = 'repeat(7, 1fr)';
      datesGrid.style.gap = '2px';
      
      // 月の最初の日の曜日を取得
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      
      // 月の日数を取得
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      
      // 前月の空白セルを追加
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.style.textAlign = 'center';
        emptyCell.style.padding = '8px';
        datesGrid.appendChild(emptyCell);
      }
      
      // 日付セルを追加
      for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.textContent = day;
        dateCell.style.textAlign = 'center';
        dateCell.style.padding = '8px';
        dateCell.style.cursor = 'pointer';
        
        // 今日の日付をハイライト
        const today = new Date();
        if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
          dateCell.style.border = '2px solid #d9e8ff';
          dateCell.style.color = 'black';
          dateCell.style.borderRadius = '5%';
        }
        
        // 日曜日は赤、土曜日は青
        const dayOfWeek = (firstDay + day - 1) % 7;
        if (dayOfWeek === 0) { // 日曜日
          dateCell.style.color = 'red';
        } else if (dayOfWeek === 6) { // 土曜日
          dateCell.style.color = 'blue';
        }
        
        // 選択された日付をハイライト
        if (selectedDate && day === selectedDate.day && currentMonth === selectedDate.month && currentYear === selectedDate.year) {
          dateCell.style.backgroundColor = '#e0e9ff';
          dateCell.style.borderRadius = '5%';
          dateCell.style.fontWeight = 'bold'; // 選択された日付を太字にする
          if (!(day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear())) {
            dateCell.style.color = 'black';
          }
        }
        
        dateCell.onmouseover = function() {
          if (!(day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) && 
              !(selectedDate && day === selectedDate.day && currentMonth === selectedDate.month && currentYear === selectedDate.year)) {
            this.style.backgroundColor = '#f0f0f0';
          }
        };
        
        dateCell.onmouseout = function() {
          if (!(day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) && 
              !(selectedDate && day === selectedDate.day && currentMonth === selectedDate.month && currentYear === selectedDate.year)) {
            this.style.backgroundColor = '';
          }
        };
        
        dateCell.onclick = function() {
          // 選択された日付を保存
          saveSelectedDate(currentYear, currentMonth, day, inputElement);
          
          // カレンダーは閉じない - 時間選択できるようにする
        };
        
        datesGrid.appendChild(dateCell);
      }
      
      calendar.appendChild(datesGrid);
    }
    
    // 初期カレンダーを表示
    updateCalendar();
    
    // 要素を追加
    calendarPart.appendChild(calendarHeader);
    calendarPart.appendChild(calendar);
    
    timeSelectionPart.appendChild(timeContainer);
    
    contentLayout.appendChild(calendarPart);
    contentLayout.appendChild(timeSelectionPart);
    
    calendarLayout.appendChild(closeBtn);
    calendarLayout.appendChild(contentLayout);
    
    calendarContainer.appendChild(calendarLayout);
    
    // 行追加ボタンの後にカレンダーを配置
    const addRowDiv = document.querySelector('.add-row');
    addRowDiv.parentNode.insertBefore(calendarContainer, addRowDiv.nextSibling);
    
    /**
     * 選択された日付を保存し、カレンダーに表示する関数
     * この関数はcreateCalendarBelow関数内でのみアクセス可能
     */
    function saveSelectedDate(year, month, day, inputField) {
      // 選択された日付を保存（行IDに関連付ける）
      selectedDate = { year, month, day };
      rowSelectedDates[rowId] = selectedDate;
      
      // カレンダーを更新して選択した日付をハイライト表示
      updateCalendar();
      
      // 日付のフォーマット文字列を作成（ログ用）
      const formattedDate = `${year}/${month + 1}/${day}`;
      
      // 既に時間が選択されている場合は、入力フィールドを更新
      if (selectedTime) {
        handleDateTimeSelection(selectedDate, selectedTime, inputField);
      }
    }
  }

  /**
   * カナダ時間から日本時間に変換 (古い関数を残してAPI互換性を維持)
   */
  function convertToJapanTime(hours, minutes) {
    let japanHours = (hours + 16) % 24;
    return { hours: Math.floor(japanHours), minutes };
  }
  
  /**
   * 日本時間からカナダ時間に変換 (古い関数を残してAPI互換性を維持)
   */
  function convertToCanadaTime(hours, minutes) {
    let canadaHours = (hours - 16 + 24) % 24;
    return { hours: Math.floor(canadaHours), minutes };
  }

  /**
   * カナダのタイムゾーンアイコンにイベントリスナーを設定
   */
  function setupTimezoneIcons() {
    const timezoneIcons = document.querySelectorAll('.maple-leaf-icon, .globe-icon');
    
    timezoneIcons.forEach(icon => {
      if (!icon.hasAttribute('data-event-set')) {
        icon.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // 既存のタイムゾーン選択メニューを削除
          const existingMenu = document.querySelector('.timezone-selection-menu');
          if (existingMenu) {
            existingMenu.remove();
          }
          
          // この行のID取得
          const row = this.closest('.row');
          const rowId = Array.from(document.querySelectorAll('.row')).indexOf(row);
          
          // 行データが未初期化の場合は初期化
          if (!rowData[rowId]) {
            rowData[rowId] = {
              unixtime: null,
              left: { timezone: DEFAULT_LEFT_TIMEZONE },
              right: { timezone: DEFAULT_RIGHT_TIMEZONE }
            };
          }
          
          // 左右どちらのタイムゾーンアイコンがクリックされたか判定
          const isLeftTimezone = this.nextElementSibling && this.nextElementSibling.id.includes('canada');
          
          // 現在選択されているタイムゾーン
          const currentTimezone = isLeftTimezone ? rowData[rowId].left.timezone : rowData[rowId].right.timezone;
          
          // タイムゾーン選択メニューを作成して表示
          showTimezoneSelectionMenu(this, rowId, currentTimezone, isLeftTimezone);
        });
        
        icon.setAttribute('data-event-set', 'true');
        icon.style.cursor = 'pointer';
      }
    });
  }
  
  /**
   * タイムゾーン選択メニューを表示する
   */
  function showTimezoneSelectionMenu(iconElement, rowId, currentTimezone, isLeftTimezone) {
    // メニューコンテナを作成
    const menuContainer = document.createElement('div');
    menuContainer.className = 'timezone-selection-menu';
    menuContainer.dataset.isLeftTimezone = isLeftTimezone;
    menuContainer.style.position = 'absolute';
    menuContainer.style.zIndex = '1000';
    menuContainer.style.backgroundColor = 'white';
    menuContainer.style.border = '1px solid #ccc';
    menuContainer.style.borderRadius = '5px';
    menuContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    menuContainer.style.padding = '5px 0';
    menuContainer.style.minWidth = '250px';
    menuContainer.style.maxHeight = '400px'; // 高さの上限を拡大
    menuContainer.style.display = 'flex';
    menuContainer.style.flexDirection = 'column';
    
    // メニュータイトル
    const menuTitle = document.createElement('div');
    menuTitle.textContent = 'タイムゾーン選択';
    menuTitle.style.fontWeight = 'bold';
    menuTitle.style.padding = '8px 10px';
    menuTitle.style.borderBottom = '1px solid #eee';
    menuTitle.style.marginBottom = '5px';
    menuTitle.style.flexShrink = '0'; // タイトルは縮小しない
    
    // 検索ボックス
    const searchBox = document.createElement('div');
    searchBox.style.padding = '8px 10px';
    searchBox.style.borderBottom = '1px solid #eee';
    searchBox.style.marginBottom = '5px';
    searchBox.style.flexShrink = '0';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'タイムゾーンを検索...';
    searchInput.style.width = '100%';
    searchInput.style.padding = '5px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.borderRadius = '3px';
    searchBox.appendChild(searchInput);
    
    // オプションを入れるスクロール可能なコンテナ
    const optionsContainer = document.createElement('div');
    optionsContainer.style.overflow = 'auto'; // スクロール可能に
    optionsContainer.style.flexGrow = '1'; // 残りのスペースを占有
    
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(searchBox);
    menuContainer.appendChild(optionsContainer);
    
    // すべてのタイムゾーンを結合（カナダのタイムゾーンも含む）
    const allTimezones = {...CANADA_TIMEZONES, ...WORLD_TIMEZONES};
    
    // タイムゾーンを地域ごとにグループ化して表示
    const regionGroups = {
      '北米': Object.entries(allTimezones).filter(([tz]) => tz.startsWith('America/') && 
             (tz.includes('Vancouver') || tz.includes('Edmonton') || tz.includes('Toronto') || 
              tz.includes('Halifax') || tz.includes('Los_Angeles') || tz.includes('Denver') || 
              tz.includes('Chicago') || tz.includes('New_York'))),
      '南米': Object.entries(allTimezones).filter(([tz]) => tz.startsWith('America/') && 
             (tz.includes('Sao_Paulo') || tz.includes('Buenos_Aires'))),
      'ヨーロッパ': Object.entries(allTimezones).filter(([tz]) => tz.startsWith('Europe/')),
      'アフリカ': Object.entries(allTimezones).filter(([tz]) => tz.startsWith('Africa/')),
      'アジア': Object.entries(allTimezones).filter(([tz]) => tz.startsWith('Asia/')),
      'オセアニア': Object.entries(allTimezones).filter(([tz]) => tz.startsWith('Australia/') || tz.startsWith('Pacific/'))
    };
    
    // 地域ごとにオプションを追加
    Object.entries(regionGroups).forEach(([regionName, timezones]) => {
      if (timezones.length === 0) return;
      
      // 地域ヘッダー
      const regionHeader = document.createElement('div');
      regionHeader.textContent = regionName;
      regionHeader.style.padding = '6px 10px';
      regionHeader.style.backgroundColor = '#f5f5f5';
      regionHeader.style.fontWeight = 'bold';
      regionHeader.style.fontSize = '0.9em';
      regionHeader.style.color = '#555';
      optionsContainer.appendChild(regionHeader);
      
      // この地域のタイムゾーンオプション
      timezones.forEach(([timezone, label]) => {
        const option = document.createElement('div');
        option.dataset.timezone = timezone; // データ属性としてタイムゾーン識別子を保持
        option.style.padding = '8px 15px 8px 12px'; // 左パディングを増やして階層を表現
        option.style.cursor = 'pointer';
        option.style.display = 'flex';
        option.style.alignItems = 'center';

        // タイムゾーンアイコンを追加
        const iconSpan = document.createElement('span');
        iconSpan.className = 'timezone-icon-in-select-box';
        const iconClass = getTimezoneIconClass(timezone);
        iconSpan.classList.add(iconClass);
        
        // カスタムアイコンの場合はスタイルを設定
        if (iconClass !== 'globe-icon') {
          const iconFilename = TIMEZONE_ICONS[timezone];
          if (iconFilename) {
            iconSpan.style.backgroundImage = `url('icons/${iconFilename}')`;
          }
        }
        
        // ラベル部分
        const labelSpan = document.createElement('span');
        labelSpan.textContent = label;
        labelSpan.style.marginLeft = '5px';
        
        option.appendChild(iconSpan);
        option.appendChild(labelSpan);
        
        // 現在選択されているタイムゾーンをハイライト
        if (timezone === currentTimezone) {
          option.style.backgroundColor = '#e0e9ff';
          option.style.fontWeight = 'bold';
          option.style.position = 'relative';
          
          // チェックマーク
          const checkmark = document.createElement('span');
          checkmark.textContent = '✓';
          checkmark.style.position = 'absolute';
          checkmark.style.right = '10px';
          option.appendChild(checkmark);
        }
        
        option.onmouseover = function() {
          if (timezone !== currentTimezone) {
            this.style.backgroundColor = '#f5f5f5';
          }
        };
        
        option.onmouseout = function() {
          if (timezone !== currentTimezone) {
            this.style.backgroundColor = '';
          }
        };
        
        option.onclick = function() {
          // タイムゾーンの変更を処理
          changeTimezone(rowId, timezone);
          menuContainer.remove();
        };
        
        optionsContainer.appendChild(option);
      });
    });
    
    // 検索機能
    searchInput.addEventListener('input', function() {
      const searchText = this.value.toLowerCase();
      const options = optionsContainer.querySelectorAll('div[data-timezone]');
      const regionHeaders = optionsContainer.querySelectorAll('div:not([data-timezone])');
      
      // すべての地域ヘッダーを一旦非表示
      regionHeaders.forEach(header => {
        header.style.display = 'none';
      });
      
      let visibleRegions = new Set();
      
      // 検索テキストに一致するオプションのみ表示
      options.forEach(option => {
        const timezone = option.dataset.timezone;
        const label = option.textContent.toLowerCase();
        
        if (label.includes(searchText) || timezone.toLowerCase().includes(searchText)) {
          option.style.display = 'flex';
          
          // このオプションの地域を特定して表示対象に追加
          for (const [region, timezones] of Object.entries(regionGroups)) {
            if (timezones.some(([tz]) => tz === timezone)) {
              visibleRegions.add(region);
              break;
            }
          }
        } else {
          option.style.display = 'none';
        }
      });
      
      // 表示対象の地域ヘッダーだけを表示
      regionHeaders.forEach(header => {
        if (visibleRegions.has(header.textContent)) {
          header.style.display = '';
        }
      });
    });
    
    // 画面内に収まるように位置を調整
    document.body.appendChild(menuContainer);
    const iconRect = iconElement.getBoundingClientRect();
    const menuRect = menuContainer.getBoundingClientRect();
    
    // 縦方向の調整
    let topPosition = iconRect.bottom + window.scrollY + 5;
    if (topPosition + menuRect.height > window.innerHeight + window.scrollY) {
      // 下に入りきらない場合は上に表示
      if (iconRect.top > menuRect.height) {
        // 上に十分なスペースがある場合
        topPosition = iconRect.top + window.scrollY - menuRect.height - 5;
      } else {
        // 上にも入りきらない場合は、ビューポートの高さに合わせて表示
        topPosition = Math.max(window.scrollY + 10, 
                              window.scrollY + window.innerHeight - menuRect.height - 10);
        
        // 高さを調整してビューポートに収める
        const availableHeight = window.innerHeight - 20; // 上下10pxのマージン
        menuContainer.style.maxHeight = `${Math.min(400, availableHeight)}px`;
      }
    }
    
    // 横方向の調整
    let leftPosition = iconRect.left + window.scrollX;
    if (leftPosition + menuRect.width > window.innerWidth + window.scrollX) {
      leftPosition = Math.max(window.scrollX + 10, 
                            window.scrollX + window.innerWidth - menuRect.width - 10);
    }
    
    menuContainer.style.top = `${topPosition}px`;
    menuContainer.style.left = `${leftPosition}px`;
    
    // 選択されている要素が見えるようにスクロール
    const selectedOption = optionsContainer.querySelector('div[style*="background-color: rgb(224, 233, 255)"]');
    if (selectedOption) {
      selectedOption.scrollIntoView({ block: 'center' });
    }
    
    // 検索ボックスにフォーカス
    setTimeout(() => searchInput.focus(), 100);
    
    // document全体のクリックでメニューを閉じる
    document.addEventListener('click', function closeMenu(e) {
      if (!menuContainer.contains(e.target) && e.target !== iconElement) {
        menuContainer.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  }
  
  /**
   * タイムゾーンを変更する
   */
  function changeTimezone(rowId, newTimezone) {
    const row = document.querySelectorAll('.row')[rowId];
    if (!row) return;
    
    // イベント呼び出し元の情報を取得
    const menuElement = document.querySelector('.timezone-selection-menu');
    if (!menuElement) return;
    
    // データ属性からどちらのタイムゾーンが変更されているか取得
    const isLeftTimezone = menuElement.dataset.isLeftTimezone === 'true';
    
    // 現在のタイムゾーンと新しいタイムゾーンが同じなら何もしない
    if (isLeftTimezone && rowData[rowId].left.timezone === newTimezone) return;
    if (!isLeftTimezone && rowData[rowId].right.timezone === newTimezone) return;
    
    // タイムゾーンの変更を保存
    if (isLeftTimezone) {
      rowData[rowId].left.timezone = newTimezone;
    } else {
      rowData[rowId].right.timezone = newTimezone;
    }
    
    // 現在のUnixタイムスタンプ（存在する場合）
    const unixTime = rowData[rowId].unixtime;
    
    if (unixTime) {
      // 両方のinputの時間を再計算して表示
      const leftInput = row.querySelector('[id^="canada-input"]');
      const rightInput = row.querySelector('[id^="japan-input"]');
      
      if (leftInput) {
        leftInput.value = formatUnixTimeToLocalDateTime(unixTime, rowData[rowId].left.timezone);
      }
      
      if (rightInput) {
        rightInput.value = formatUnixTimeToLocalDateTime(unixTime, rowData[rowId].right.timezone);
      }
    }
    
    // タイムゾーンアイコンを更新
    updateTimezoneIcons();
    
    // データを保存
    saveData();
  }

  // DOMContentLoadedイベントの最後でタイムゾーンアイコンのセットアップを呼び出す
  setupTimezoneIcons();
});

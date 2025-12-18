import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const restaurantInfo = {
  number: '1',
  openDate: '2010-01-25',
  group: 'Группа A',
  region: 'MSK_1',
  format: 'FC',
  id: 'Геворкян Казар Авагович',
  od: 'Карпова Анна Владимировна',
  tu: 'Поркул Андрей Петрович',
  subdivision: '1',
  restaurant: '0001-МСК, пл Киевского вокзала 2, ТЦ Европейский, 4 этаж'
};

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [staffingSubTab, setStaffingSubTab] = useState('month1');

  const [nuModel, setNuModel] = useState({
    normHoursPerDay: 10,
    cleanersPerShift: 3,
    staffingNU: 0,
    hoursNUNorm: 407.9,
    hoursNUEntered: 310.0,
    hoursAcceptance: 0,
    totalHoursNorm: 0,
    totalHoursEntered: 0,
    delta: 0,
    comment: ''
  });

  const [deliveries, setDeliveries] = useState({
    deliveryWindow: '01:00–04:00',
    deliveriesPerWeek: 5,
    avgWeight: 1.1,
    hoursPerDelivery: 4,
    hoursPerMonth: 10,
    whoAccepts: 'ЧБР',
    totalHoursPerMonth: 93,
    whereAccounted: 'часы не будут учтены'
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <tbody>
              <tr className="divide-x">
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">№</div>
                  <div className="font-semibold">{restaurantInfo.number}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">Дата открытия</div>
                  <div className="font-semibold">{restaurantInfo.openDate}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">Группа</div>
                  <div className="font-semibold">{restaurantInfo.group}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">Регион</div>
                  <div className="font-semibold">{restaurantInfo.region}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">Формат</div>
                  <div className="font-semibold">{restaurantInfo.format}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">ИД</div>
                  <div className="font-semibold">{restaurantInfo.id}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">ОД</div>
                  <div className="font-semibold">{restaurantInfo.od}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">ТУ</div>
                  <div className="font-semibold">{restaurantInfo.tu}</div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="font-medium text-muted-foreground">Общее подр-ие</div>
                  <div className="font-semibold">{restaurantInfo.subdivision}</div>
                </td>
                <td className="px-2 py-2">
                  <div className="font-medium text-muted-foreground">Ресторан</div>
                  <div className="font-semibold">{restaurantInfo.restaurant}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-7 w-full mb-6">
            <TabsTrigger value="dashboard">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Сводные итоги
            </TabsTrigger>
            <TabsTrigger value="plan-lc">
              <Icon name="Target" size={16} className="mr-2" />
              План LC
            </TabsTrigger>
            <TabsTrigger value="staffing-aup">
              <Icon name="Users" size={16} className="mr-2" />
              STAFFING АУП
            </TabsTrigger>
            <TabsTrigger value="staffing-cbr">
              <Icon name="UserCheck" size={16} className="mr-2" />
              STAFFING ЧБР
            </TabsTrigger>
            <TabsTrigger value="model-nu">
              <Icon name="Moon" size={16} className="mr-2" />
              Модель НУ
            </TabsTrigger>
            <TabsTrigger value="reserves">
              <Icon name="Calendar" size={16} className="mr-2" />
              Резервы и отпуска
            </TabsTrigger>
            <TabsTrigger value="deliveries">
              <Icon name="Truck" size={16} className="mr-2" />
              Поставки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">LC Факт</CardTitle>
                  <Icon name="DollarSign" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.8%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-success">-2.1%</span> от плана
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ФОТ</CardTitle>
                  <Icon name="Wallet" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2 845 000 ₽</div>
                  <p className="text-xs text-muted-foreground">Текущий месяц</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Часы ЧБР</CardTitle>
                  <Icon name="Clock" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4 280 ч</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-warning">+120ч</span> от норматива
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Штат</CardTitle>
                  <Icon name="Users" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42 чел</div>
                  <p className="text-xs text-muted-foreground">ЧБР + АУП</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Динамика LC по месяцам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: 'Январь', lc: 26.5, plan: 27.0 },
                    { month: 'Февраль', lc: 25.8, plan: 27.0 },
                    { month: 'Март', lc: 24.8, plan: 27.0 }
                  ].map((item) => (
                    <div key={item.month} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium">{item.month}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-secondary rounded-full h-6 relative overflow-hidden">
                            <div
                              className="bg-primary h-full rounded-full flex items-center justify-end px-2 text-xs font-semibold text-white"
                              style={{ width: `${(item.lc / 30) * 100}%` }}
                            >
                              {item.lc}%
                            </div>
                          </div>
                          <Badge variant={item.lc < item.plan ? 'default' : 'destructive'}>
                            {item.lc < item.plan ? 'В плане' : 'Выше плана'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plan-lc">
            <Card>
              <CardHeader>
                <CardTitle>План LC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Раздел в разработке</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staffing-aup">
            <Card>
              <CardHeader>
                <CardTitle>STAFFING АУП</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Раздел в разработке</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staffing-cbr" className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={staffingSubTab === 'month1' ? 'default' : 'outline'}
                onClick={() => setStaffingSubTab('month1')}
              >
                STAFFING ЧБР+1 мес
              </Button>
              <Button
                variant={staffingSubTab === 'month2' ? 'default' : 'outline'}
                onClick={() => setStaffingSubTab('month2')}
              >
                STAFFING ЧБР+2 мес
              </Button>
              <Button
                variant={staffingSubTab === 'summary' ? 'default' : 'outline'}
                onClick={() => setStaffingSubTab('summary')}
              >
                STAFFING ЧБР свод 3 мес
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {staffingSubTab === 'month1' && 'STAFFING ЧБР +1 месяц'}
                  {staffingSubTab === 'month2' && 'STAFFING ЧБР +2 месяца'}
                  {staffingSubTab === 'summary' && 'STAFFING ЧБР сводка 3 месяца'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Раздел в разработке</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="model-nu">
            <Card>
              <CardHeader>
                <CardTitle>Модель ночной уборки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 text-sm font-medium">Параметр</th>
                        <th className="text-left p-3 text-sm font-medium">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Норматив часов в сутки</td>
                        <td className="p-3">
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                                {nuModel.normHoursPerDay}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Рассчитывается автоматически</TooltipContent>
                          </Tooltip>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Число уборщиков в смену</td>
                        <td className="p-3">
                          <Input
                            type="number"
                            value={nuModel.cleanersPerShift}
                            onChange={(e) =>
                              setNuModel({ ...nuModel, cleanersPerShift: Number(e.target.value) })
                            }
                            className="w-32 bg-success/10 border-success focus:ring-success"
                          />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">STAFFING НУ</td>
                        <td className="p-3">
                          <Input
                            type="number"
                            value={nuModel.staffingNU}
                            onChange={(e) =>
                              setNuModel({ ...nuModel, staffingNU: Number(e.target.value) })
                            }
                            className="w-32 bg-success/10 border-success focus:ring-success"
                          />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Часы НУ по норме</td>
                        <td className="p-3">
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-warning/20 px-3 py-2 rounded cursor-not-allowed inline-block">
                                {nuModel.hoursNUNorm}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Рассчитывается автоматически</TooltipContent>
                          </Tooltip>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Часы НУ (введено)</td>
                        <td className="p-3">
                          <Input
                            type="number"
                            value={nuModel.hoursNUEntered}
                            onChange={(e) =>
                              setNuModel({ ...nuModel, hoursNUEntered: Number(e.target.value) })
                            }
                            className="w-32 bg-success/10 border-success focus:ring-success"
                          />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Часы на приемку</td>
                        <td className="p-3">
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-warning/20 px-3 py-2 rounded cursor-not-allowed inline-block">
                                {nuModel.hoursAcceptance}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Рассчитывается автоматически</TooltipContent>
                          </Tooltip>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Итого часов НУ (по норме)</td>
                        <td className="p-3">
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-warning/20 px-3 py-2 rounded cursor-not-allowed inline-block">
                                {nuModel.totalHoursNorm}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Рассчитывается автоматически</TooltipContent>
                          </Tooltip>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Итого часов НУ (введено)</td>
                        <td className="p-3">
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-warning/20 px-3 py-2 rounded cursor-not-allowed inline-block">
                                {nuModel.totalHoursEntered}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Рассчитывается автоматически</TooltipContent>
                          </Tooltip>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Дельта (введено минус норма)</td>
                        <td className="p-3">
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-warning/20 px-3 py-2 rounded cursor-not-allowed inline-block">
                                {nuModel.delta}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Рассчитывается автоматически</TooltipContent>
                          </Tooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm">Комментарий</td>
                        <td className="p-3">
                          <Input
                            type="text"
                            value={nuModel.comment}
                            onChange={(e) => setNuModel({ ...nuModel, comment: e.target.value })}
                            placeholder="Введите комментарий"
                            className="bg-success/10 border-success focus:ring-success"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reserves">
            <Card>
              <CardHeader>
                <CardTitle>Резервы и отпуска</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-2">Тип должности</th>
                        <th className="text-left p-2">Юрлицо</th>
                        <th className="text-left p-2">Подразделение</th>
                        <th className="text-left p-2">Таб. №</th>
                        <th className="text-left p-2">ФИО</th>
                        <th className="text-left p-2">Должность</th>
                        <th className="text-left p-2">Ставка net</th>
                        <th className="text-left p-2">Ср. заработок</th>
                        <th className="text-left p-2">План. отпуска</th>
                        <th className="text-left p-2">Отпускные</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td colSpan={10} className="p-4 text-center text-muted-foreground">
                          Данные загружаются...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deliveries">
            <Card>
              <CardHeader>
                <CardTitle>Параметры поставок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 text-sm font-medium">Параметр</th>
                          <th className="text-left p-3 text-sm font-medium">Значение</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 text-sm">Окно доставки</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.deliveryWindow}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 text-sm">Кол-во поставок в неделю</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.deliveriesPerWeek}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 text-sm">Ср. вес 1 поставки, тонны</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.avgWeight}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 text-sm">Кол-во ЧЧ на 1 поставку (ИВЛ)</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.hoursPerDelivery}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 text-sm">Кол-во ЧЧ в месяц на прием поставок</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.hoursPerMonth}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b bg-success/5">
                          <td className="p-3 text-sm font-medium">Кто принимает (ЧБР / НУ / АУП)</td>
                          <td className="p-3">
                            <Select
                              value={deliveries.whoAccepts}
                              onValueChange={(value) =>
                                setDeliveries({ ...deliveries, whoAccepts: value })
                              }
                            >
                              <SelectTrigger className="w-40 bg-success/10 border-success">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ЧБР">ЧБР</SelectItem>
                                <SelectItem value="НУ">НУ</SelectItem>
                                <SelectItem value="АУП">АУП</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 text-sm">Кол-во ЧЧ в месяц на прием всех поставок</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.totalHoursPerMonth}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm">Где учитываются часы</td>
                          <td className="p-3">
                            <div className="bg-muted px-3 py-2 rounded cursor-not-allowed inline-block">
                              {deliveries.whereAccounted}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Button className="mt-4">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
